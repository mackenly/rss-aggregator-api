import { ValidateFeedUrl } from './validators';
import * as htmlparser2 from 'htmlparser2';

export async function ParseRSSFeed(url: string) {
    // validate the url
    try {
        ValidateFeedUrl(url);
    } catch (error) {
        throw error;
    }

    // fetch the feed
    const feed = await fetch(url)
        .then(response => response.text())
        .then(data => {
            return htmlparser2.parseFeed(data);
        })
        .catch(error => {
            return new Error('Failed to fetch feed: ' + error.message);
        });
    return feed;
}