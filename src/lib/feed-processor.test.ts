import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { UnstableDevWorker, PlatformProxy } from "wrangler";
import { unstable_dev, getPlatformProxy } from "wrangler";

import { setupDb } from "./setup";
import { getFeeds, addFeed, updateFeed, deleteFeed } from "./feed-processor";

describe.sequential("Feed Processor", () => {

    let worker: UnstableDevWorker;
    let platform: PlatformProxy;
    let env: any;

    beforeAll(async () => {
        worker = await unstable_dev("src/index.ts", {
            experimental: { disableExperimentalWarning: false },
        });
        platform = await getPlatformProxy();
        env = platform.env;
    });

    afterAll(async () => {
        await worker.stop();
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
        const feedData = {
            title: "CRTV",
            link: "https://crtv.dev/",
            description: "Example description",
        };
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
        expect(result[0].description).toBe("Example description");
        expect(result[0].title).toBe("CRTV");
    });

    it("should update a site", async () => {
        const result = await updateFeed(env, 1);
        expect(result).toBe(true);
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