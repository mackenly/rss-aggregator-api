import { Bindings } from '../../worker-configuration';
import { deleteItemEmbedding, createEmbedding } from "./embeddings";

/**
 * createItem processes an item and adds it to the database if it doesn't exist, otherwise updates it
 * @param env Cloudflare Worker environment bindings
 * @param site_id Site's ID
 * @param item Item data to process
 */
export async function createItem(env: Bindings, site_id: number, item: any) {
    // get the item's hash
    const hash = await getHash(item);

    // check if the item exists
    const { results } = await env.DB.prepare('SELECT * FROM item WHERE hash = ?').bind(hash).all();

    // if the item exists, throw an error
    if (results.length !== 0) {
        throw new Error('Item already exists');
    }

    const { title, link, description, pubDate } = item;
    const rss_id = item.id;
    const now = new Date();

    // insert the item
    let record: D1Result<any>;
    try {
        record = await env.DB.prepare('INSERT INTO item (site_id, rss_id, title, description, link, hash, checked_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING id').bind(site_id, rss_id, title, description, link, hash, now.toISOString(), pubDate.toISOString()).all();
    } catch (error) {
        throw new Error('Failed to insert item: ' + error.message);
    }

    // create embedding
    const embeddingText = `${title} ${description}`;
    try {
        await createEmbedding(env, record.results[0].id, embeddingText);
    } catch (error) {
        if (error.message.includes("Failed to create embedding with @cf/baai/bge-base-en-v1.5: Cannot read properties of undefined (reading 'fetch')")) {
            console.log('AI is not available');
        } else {
            throw new Error('Failed to create embedding: ' + error.message);
        }
    }
}

/**
 * updateItem updates an item when provided an item ID and new item data
 * @param env Cloudflare Worker environment bindings
 * @param id ID of the item to update
 * @param item New item data
 * @returns The updated item
 */
export async function updateItem(env: Bindings, site_id: number, item: any) {
    // get the item's hash
    const hash = await getHash(item);

    if (!item.id || item.id === undefined) {
        throw new Error('Invalid item data');
    }

    if (!site_id || site_id === undefined) {
        throw new Error('Invalid site ID');
    }

    // check if the item exists
    const { results } = await env.DB.prepare('SELECT * FROM item WHERE rss_id = ? and site_id = ?').bind(item.id, site_id).all();
    
    // if the item doesn't exist, throw an error
    if (results.length === 0) {
        // create the item
        return await createItem(env, site_id, item);
    }
    const id = results[0].id as number;

    const oldItem = results[0];
    if (oldItem.hash === hash) {
        return oldItem;
    }

    const { title, link, description, pubDate } = item;
    const rss_id = item.id;
    const now = new Date();

    // update the item
    try {
        await env.DB.prepare('UPDATE item SET rss_id = ?, title = ?, description = ?, link = ?, hash = ?, checked_at = ?, updated_at = ? WHERE id = ?').bind(rss_id, title, description, link, hash, now.toISOString(), pubDate.toISOString(), id).run();
    } catch (error) {
        throw new Error('Failed to update item: ' + error.message);
    }

    await deleteItemEmbedding(env, id);

    // create embedding
    const embeddingText = `${title} ${description}`;
    try {
        await createEmbedding(env, id, embeddingText);
    } catch (error) {
        if (error.message.includes("Failed to create embedding with @cf/baai/bge-base-en-v1.5: Cannot read properties of undefined (reading 'fetch')")) {
            console.log('AI is not available');
        } else {
            throw new Error('Failed to create embedding: ' + error.message);
        }
    }
}

/**
 * getItems returns all items from the database for a given site ID
 * @param env Cloudflare Worker environment bindings
 * @param site_id Site's ID
 * @returns All items for the given site ID
 */
export async function getItems(env: Bindings, site_id: number) {
    try {
        const { results } = await env.DB.prepare('SELECT * FROM item WHERE site_id = ?').bind(site_id).all();
        return results;
    } catch (error) {
        throw new Error('Failed to get items: ' + error.message);
    }
}

/**
 * deleteItem deletes an item when provided an item ID
 * @param env Cloudflare Worker environment bindings
 * @param id ID of the item to delete
 */
export async function deleteItem(env: Bindings, id: number) {
    try {
        // delete embeddings
        await deleteItemEmbedding(env, id);

        // delete item's categories
        await env.DB.prepare('DELETE FROM item_category WHERE item_id = ?').bind(id).run();

        // delete item's meta
        await env.DB.prepare('DELETE FROM item_meta WHERE item_id = ?').bind(id).run();

        // delete item
        await env.DB.prepare('DELETE FROM item WHERE id = ?').bind(id).run();
    } catch (error) {
        throw new Error('Failed to delete item: ' + error.message);
    }
}

/**
 * getHash returns a SHA-256 hash of the provided item
 * @param item Item can be anything
 * @returns SHA-256 hash of the item
 */
export async function getHash(item: any) {
    let parts = [];
    for (let key in item) {
        if (item.hasOwnProperty(key)) {
            parts.push(item[key]);
        }
    }
    const encoder = new TextEncoder();
    const data = encoder.encode(parts.join(''));
    const hash = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}