import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { wordpressTestFile } from "../../test_examples/ryanhayes.net";
import { ghostTestFile } from "../../test_examples/crtv.dev.xml";

import { setupDb } from "./setup";
import { getFeeds, addFeed, updateFeed, deleteFeed } from "./feed-processor";
import { parseFeed } from "./rss-parser";
import { env } from "cloudflare:test";

describe.sequential("Feed Processor", () => {

    beforeAll(async () => {
        await setupDb(env, true);
    });

    it("should do all of the things", async () => {
        const result1 = await getFeeds(env);
        expect(result1).toEqual([]);

        const feedData1: any = await parseFeed(ghostTestFile);
        const url = new URL("https://crtv.dev/feed");
        const result2 = await addFeed(env, feedData1, url);
        expect(result2).toEqual({ id: 1 });
        const result3 = await getFeeds(env);
        expect(result3.length).toBe(1);

        const result4 = await getFeeds(env);
        expect(result4.length).toBe(1);

        const result5 = await getFeeds(env);
        expect(result5.length).toBe(1);
        expect(result5[0].rss_url).toBe("https://crtv.dev/feed");
        expect(result5[0].link).toBe("https://crtv.dev/");
        expect(result5[0].description).toBe("Web Development and Information Technology Articles for Creative Developers");
        expect(result5[0].title).toBe("CRTV DEV");

        const feedData2: any = await parseFeed(wordpressTestFile);
        console.log(feedData2.items[0]);
        const result6 = await updateFeed(env, 1, 1, feedData2);
        expect(result6).toBe(true);

        const result7 = await getFeeds(env);
        expect(result7.length).toBe(1);
        expect(result7[0].rss_url).toBe("https://crtv.dev/feed"); // unchanged since we're just feeding in a new feed data
        expect(result7[0].link).toBe("https://ryanhayes.net/");
        expect(result7[0].description).toBe("Software and Startup Skills to Boost Your Business and Career");
        expect(result7[0].title).toBe("Ryan Hayes");

        const result8 = await deleteFeed(env, 1);
        expect(result8).toEqual({ id: 1 });

        const result9 = await getFeeds(env);
        expect(result9).toEqual([]);
    });

    it("should be no sites in existence", async () => {
        const result = await getFeeds(env);
        expect(result).toEqual([]);
    });

    it("should add a site", async () => {
        const feedData: any = await parseFeed(ghostTestFile);
        const url = new URL("https://crtv.dev/feed");
        const result = await addFeed(env, feedData, url);
        expect(result).toEqual({ id: 1 });
    });

    // the sequential test runner doesn't seem to be working as expected
    // so I'm going to comment out the rest of the tests for now
    // they're all in the "it should do all of the things" test

    /*it("should contain one site", async () => {
        const result = await getFeeds(env);
        expect(result.length).toBe(1);
    });

    it("should contain the correct site", async () => {
        const result = await getFeeds(env);
        expect(result.length).toBe(1);
        expect(result[0].rss_url).toBe("https://crtv.dev/feed");
        expect(result[0].link).toBe("https://crtv.dev/");
        expect(result[0].description).toBe("Web Development and Information Technology Articles for Creative Developers");
        expect(result[0].title).toBe("CRTV DEV");
    });

    it("should update a site", async () => {
        const feedData: any = await parseFeed(wordpressTestFile);
        const result = await updateFeed(env, 1, 1, feedData);
        expect(result).toBe(true);
    });

    it("should contain the correct site", async () => {
        const result = await getFeeds(env);
        expect(result.length).toBe(1);
        expect(result[0].rss_url).toBe("https://crtv.dev/feed"); // unchanged since we're just feeding in a new feed data
        expect(result[0].link).toBe("https://ryanhayes.net/");
        expect(result[0].description).toBe("Software and Startup Skills to Boost Your Business and Career");
        expect(result[0].title).toBe("Ryan Hayes");
    });*/

    it("should delete a site", async () => {
        const result = await deleteFeed(env, 1);
        expect(result).toEqual({ id: 1 });
    });

    it("no sites should exist", async () => {
        const result = await getFeeds(env);
        expect(result).toEqual([]);
    });
});