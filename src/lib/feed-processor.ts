import { Bindings } from '../../worker-configuration';
import { ParseRSSFeed } from './rss-parser';
import { ValidateFeedUrl } from './validators';

// process and array of feeds

// get feeds from db
export async function getFeeds(env: Bindings) {
    const { results } = await env.DB.prepare('SELECT * FROM site').all()
    return results
}

// fetch a feed
export async function fetchFeedData(env: Bindings, url: URL, canExist: boolean = true) {
    // check if feed exists
    if (!canExist) {
        const feed = await env.DB.prepare('SELECT * FROM site WHERE rss_id = ?').bind(url).all()
        if (feed.results.length > 0) {
            throw new Error('Feed already exists');
        }
    }

    // validate the url
    try {
        ValidateFeedUrl(url.toString())
    } catch (error) {
        throw new Error('Invalid URL: ' + error.message)
    }

    // fetch the feed
    try {
        return await ParseRSSFeed(url)
    } catch (error) {
        throw new Error('Failed to fetch feed: ' + error.message)
    }
}

// add a new feed
export async function addFeed(env: Bindings, feedData: any, url: URL, owner_id: number = 0) {
    const { title, link, description } = feedData
    const updated = new Date().toISOString()
    let rss_id = url.toString();
    if (feedData.id !== undefined) {
        rss_id = feedData.id;
    }
    const hash = 'nothing for now'

    // insert feed into db
    try {
        const record = await env.DB.prepare('INSERT INTO site (owner_id, rss_id, rss_url, title, link, description, hash, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?) RETURNING id').bind(owner_id, rss_id, url.toString(), title, link, description, hash, updated).all()
        return record.results[0]
    } catch (error) {
        throw new Error('Failed to insert feed into db: ' + error.message)
    }
}

// update a feed
export async function updateFeed(env: Bindings, id: number, owner_id: number = 0, feedData: any = null) {
    // check if feed exists
    const feed = await env.DB.prepare('SELECT * FROM site WHERE id = ?').bind(id).all()
    if (feed.results.length === 0) {
        throw new Error('Feed does not exist')
    }
    const url: URL = new URL(feed.results[0]['rss_url'].toString())

    // fetch the feed
    if (feedData === null) {
        try {
            feedData = await fetchFeedData(env, url, false)
        } catch (error) {
            throw new Error('Failed to fetch feed: ' + error.message)
        }
    }
    
    const { title, link, description } = feedData
    const updated = new Date().toISOString()
    let rss_id = url.toString();
    if (feedData.id !== undefined) {
        rss_id = feedData.id;
    }
    const hash = 'nothing for now'
    const currentDate = new Date().toISOString()

    // update feed in db
    try {
        await env.DB.prepare('UPDATE site SET owner_id = ?, rss_id = ?, rss_url = ?, title = ?, link = ?, description = ?, hash = ?, checked_at = ?, updated_at = ? WHERE id = ?').bind(owner_id, rss_id, url.toString(), title, link, description, hash, currentDate, updated, id).run()
        return true
    } catch (error) {
        throw new Error('Failed to update feed in db: ' + error.message)
    }
}

// delete a feed
export async function deleteFeed(env: Bindings, id: number) {
    try {
        // get items from site
        const items = await env.DB.prepare('SELECT * FROM item WHERE site_id = ?').bind(id).all()

        // for each item delete the other records
        for (const item of items.results) {
            // delete from item_vector_linking
            await env.DB.prepare('DELETE FROM item_vector_linking WHERE item_id = ?').bind(item.id).run()
            // delete from item_category
            await env.DB.prepare('DELETE FROM item_category WHERE item_id = ?').bind(item.id).run()
            // delete from item_meta
            await env.DB.prepare('DELETE FROM item_meta WHERE item_id = ?').bind(item.id).run()
        }

        // delete from items
        await env.DB.prepare('DELETE FROM item WHERE site_id = ?').bind(id).run()
        // delete from site_meta
        await env.DB.prepare('DELETE FROM site_meta WHERE site_id = ?').bind(id).run()
        // delete from site_image
        await env.DB.prepare('DELETE FROM site_image WHERE site_id = ?').bind(id).run()
        // delete from site
        await env.DB.prepare('DELETE FROM site WHERE id = ?').bind(id).run()
    } catch (error) {
        throw new Error('Failed to delete feed: ' + error.message)
    }

    return { id }
}