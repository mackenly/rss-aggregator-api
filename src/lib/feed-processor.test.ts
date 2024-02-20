import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { PlatformProxy } from "wrangler";
import { getPlatformProxy } from "wrangler";
import fs from "fs";

import { setupDb } from "./setup";
import { getFeeds, addFeed, updateFeed, deleteFeed } from "./feed-processor";
import { testFunctions } from "./rss-parser";

describe.sequential("Feed Processor", () => {

    let platform: PlatformProxy;
    let env: any;

    beforeAll(async () => {
        platform = await getPlatformProxy();
        env = platform.env;
    });

    afterAll(async () => {
        await platform.dispose();
    });

    it("setup should return true", async () => {
        const result = await setupDb(env, true);
        expect(result).toBe(true);
    });

    it("no sites should exist", async () => {
        const result = await getFeeds(env);
        expect(result).toEqual([]);
    });

    it("should add a site", async () => {
        const feedData: any = await fs.promises.readFile("./test_examples/crtv.dev.xml").then(data => testFunctions.parseFeed(data.toString()));
        const url = new URL("https://crtv.dev/feed");
        const result = await addFeed(env, feedData, url);
        expect(result).toEqual({ id: 1 });
    });

    it("should contain one site", async () => {
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
        const feedData: any = await fs.promises.readFile("./test_examples/ryanhayes.net.txt").then(data => testFunctions.parseFeed(data.toString()));
        const result = await updateFeed(env, 1, 1, feedData);
        expect(result).toBe(true);
    });

    it("should contain the correct site", async () => {
        const result = await getFeeds(env);
        expect(result.length).toBe(1);
        expect(result[0].rss_url).toBe("https://crtv.dev/feed"); // unchanged since we're just feeding in a new feed data
        expect(result[0].link).toBe("https://ryanhayes.net/");
        expect(result[0].description).toBe("People First, Software Second");
        expect(result[0].title).toBe("Ryan Hayes");
    });

    it("should delete a site", async () => {
        const result = await deleteFeed(env, 1);
        expect(result).toEqual({ id: 1 });
    });

    it("no sites should exist", async () => {
        const result = await getFeeds(env);
        expect(result).toEqual([]);
    });
});