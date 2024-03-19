import { Bindings } from '../../worker-configuration';
import { updateFeed } from './feed-processor';

/**
 * cronHandler
 * @param env Cloudflare Worker environment bindings
 * @returns True if the cron job was successful
 */
export async function cronHandler(env: Bindings) {
    // get all feeds
    const feeds = await env.DB.prepare('SELECT * FROM site').all();
    for (const feed of feeds.results) {
        try {
            await updateFeed(env, feed.id as number);
        } catch (error) {
            console.error('Failed to update feed:', error.message);
        }
    }
    return true;
}