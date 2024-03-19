import { Ai } from '@cloudflare/ai'

import { Bindings } from '../../worker-configuration';

/**
 * createEmbedding creates an embedding for a given item and text
 * @param env Cloudflare Worker environment bindings
 * @param itemId ID of the item to create an embedding for
 * @param text Text to create an embedding with
 * @returns The ID of the embedding and the ID of the item it is linked to
 * @throws Error if the embedding could not be created
 */
export async function createEmbedding(env: Bindings, itemId: number, text: string) {
    // check if text is present
    if (!text || text.length === 0) {
        throw new Error('No text provided');
    }

    // check if itemId is present
    if (!itemId) {
        throw new Error('No itemId provided');
    }

    // clean up text
    text = text.trim();

    // check if item already has an embedding
    try {
        let { results } = await env.DB.prepare("SELECT * FROM item_vector_linking WHERE item_id = ?").bind(itemId).all();
        if (results.length > 0) {
            console.log('Item already has an embedding');
            // delete existing embedding
            await deleteItemEmbedding(env, itemId);
        }
    } catch (error) {
        throw new Error(`Failed to check if embedding exists for ${itemId}: ${error.message}`);
    }

    let ai;
    try {
        ai = new Ai(env.AI);
    } catch (error) {
        throw new Error('Failed to create AI instance: ' + error.message);
    }

    // create embedding
    const model = '@cf/baai/bge-base-en-v1.5';
    const { data } = await ai.run(model, { text: [text] })
    .catch((error: Error) => {
        throw new Error(`Failed to create embedding with ${model}: ` + error.message);
    });
    const values = data[0];

    if (!values) {
        throw new Error('No vector values returned for text');
    }

    // insert embedding into db
    let record;
    try {
        record = await env.DB.prepare("INSERT INTO item_vector_linking (item_id) VALUES (?) RETURNING id").bind(itemId).run();
    } catch (error) {
        throw new Error('Failed to insert embedding into db: ' + error.message);
    }

    try {
        // get embedding id
        const { id } = record.results[0];
        const inserted = await env.VECTORIZE_INDEX.upsert([
            {
                id: id.toString(),
                values,
            }
        ]);

        return {
            id,
            itemId
        };
    } catch (error) {
        throw new Error('Failed to insert embedding into vector index: ' + error.message);
    }
}

/**
 * deleteItemEmbedding deletes an embedding for a given item when provided an item ID
 * @param env Cloudflare Worker environment bindings
 * @param item_id ID of the item to delete the embedding for
 * @returns True if the embedding was deleted successfully
 * @throws Error if the embedding could not be deleted
 */
export async function deleteItemEmbedding(env: Bindings, item_id: number) {
    // check if id is present
    if (!item_id) {
        throw new Error('No item_id provided');
    }

    // delete embedding from db
    try {
        await env.DB.prepare("DELETE FROM item_vector_linking WHERE item_id = ?").bind(item_id).run();
    } catch (error) {
        throw new Error('Failed to delete embedding from db linking table: ' + error.message);
    }

    // delete embedding from vector index
    try {
        await env.VECTORIZE_INDEX.deleteByIds([item_id.toString()]);
    } catch (error) {
        if (error.message.includes("Cannot read properties of undefined (reading 'deleteByIds')")) {
            // soft fail if vector index is not available
            console.log('Vector index is not available');
            return true;
        } else {
            throw new Error('Failed to delete embedding from vector index: ' + error.message);
        }
    }

    return true;
}

/**
 * getEmbeddingForItem gets an embedding id for a given item when provided an item ID
 * @param env Cloudflare Worker environment bindings
 * @param item_id ID of the item to get the embedding for
 * @returns The embedding id for the given item
 * @throws Error if the embedding could not be retrieved
 */
export async function getEmbeddingForItem(env: Bindings, item_id: number) {
    // check if id is present
    if (!item_id) {
        throw new Error('No id provided');
    }

    // get embedding from db
    let results;
    try {
        results = await env.DB.prepare("SELECT * FROM item_vector_linking WHERE item_id = ?").bind(item_id).all();
    } catch (error) {
        throw new Error('Failed to get embedding from db: ' + error.message);
    }

    return results[0];
}

/**
 * similarEmbeddingIds gets similar embeddings for a given text
 * @param env Cloudflare Worker environment bindings
 * @param text Text to get similar embeddings for
 * @param limit Limit of similar embeddings to return
 * @returns An array of item IDs that are similar to the given text
 * @throws Error if the embeddings could not be retrieved
 */
export async function similarEmbeddingIds(env: Bindings, text: string, limit: number = 10) {
    // check if text is present
    if (!text || text.length === 0) {
        throw new Error('No text provided');
    }

    // check if limit is present
    if (!limit || limit <= 0) {
        throw new Error('No limit provided');
    }

    const ai = new Ai(env.AI);

    // clean up text
    text = text.trim();

    // create embedding
    const { data } = await ai.run('@cf/baai/bge-base-en-v1.5', { text: [text] });
    const values = data[0];

    if (!values) {
        throw new Error('No vector values created for text');
    }

    // get similar embeddings
    const SIMILARITY_CUTOFF = env.SIMILARITY_CUTOFF || 0.5;
    const TOP_K = env.TOP_K || 3;
    const vectorQuery = await env.VECTORIZE_INDEX.query(values, { topK: TOP_K });
    console.log(vectorQuery.matches);
    const vecIds = vectorQuery.matches
        .filter(vec => vec.score > SIMILARITY_CUTOFF)
        // @ts-expect-error
        .map(vec => vec.vectorId)

    // get item ids
    let itemIds = [];
    if (vecIds.length) {
        const { results } = await env.DB.prepare(`SELECT * FROM item_vector_linking WHERE id IN (${vecIds.join(", ")})`).bind().all();
        if (results) itemIds = results.map(vec => vec.item_id);
    }

    // apply limit
    itemIds = itemIds.slice(0, limit);

    return itemIds;
}