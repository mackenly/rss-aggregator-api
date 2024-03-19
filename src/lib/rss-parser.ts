import { ValidateFeedUrl } from './validators';
import * as htmlparser2 from 'htmlparser2';

export async function ParseRSSFeed(url: URL) {
    if (typeof url === 'string') {
        url = new URL(url);
    }

    // validate the url
    try {
        ValidateFeedUrl(url.toString());
    } catch (error) {
        throw error;
    }

    // fetch the feed
    const feed = await fetchUrl(url).then(parseFeed);
    return feed;
}

async function fetchUrl(url: URL) {
    return fetch(url.toString())
        .then(response => response.text())
        .catch(error => {
            throw new Error('Failed to fetch feed: ' + error.message);
        });
}

export function parseFeed(data: string) {
    return htmlparser2.parseFeed(data);
}