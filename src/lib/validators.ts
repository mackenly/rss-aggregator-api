/**
 * Validates a feed url
 * @param url URL to validate
 * @returns true if the url is valid, exception otherwise
 * @throws Error if the url is invalid
 */
export function ValidateFeedUrl(url: string) {
    // check if url is a valid url
    if (!url.startsWith('https://')) {
        throw new Error('Invalid URL: must start with https://');
    }

    if (!url.includes('.')) {
        throw new Error('Invalid URL: must contain a dot');
    }

    // match the url against a regex
    const urlRegex = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + //port
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    if (!urlRegex.test(url)) {
        throw new Error('Invalid URL: not a valid URL');
    }

    // if can be a URL
    try {
        new URL(url);
    } catch (error) {
        throw new Error('Invalid URL: ' + error.message);
    }

    return;
}