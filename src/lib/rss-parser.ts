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
    const res = await fetchUrl(url);
    if (res === null) {
        throw new Error('Failed to fetch feed');
    }
    const feed = await parseFeed(res);
    return feed;
}

async function fetchUrl(url: URL) {
    return fetch(url.toString())
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch feed: ' + response.statusText);
            }
            return response.text();
        })
        .catch(error => {
            throw new Error('Failed to fetch feed: ' + error.message);
        });
}

export function parseFeed(data: string) {
    return htmlparser2.parseFeed(data);
}