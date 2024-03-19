import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ParseRSSFeed, parseFeed } from "./rss-parser";
import { wordpressTestFile } from "../../test_examples/ryanhayes.net";
import { ghostTestFile } from "../../test_examples/crtv.dev.xml";

describe("Rss Parser", () => {

    it("should parse a feed from example Ghost", async () => {
        const feed: any = await parseFeed(ghostTestFile.toString());
        expect(feed.title).toBe("CRTV DEV");
        expect(feed.link).toBe("https://crtv.dev/");
        expect(feed.description).toBe("Web Development and Information Technology Articles for Creative Developers");
        expect(feed.items.length).toBeGreaterThan(0);
    });

    it("should parse a feed from remote Ghost", async ({ skip }) => {
        const url = new URL("https://crtv.dev/feed");
        const feed: any = await ParseRSSFeed(url).catch((error) => {
            if (error.message.includes("Failed to fetch feed: Forbidden")) {
                console.log(error.message);
                skip();
            }
        });
        expect(feed.title).toBe("CRTV DEV");
        expect(feed.link).toBe("https://crtv.dev/");
        expect(feed.description).toBe("Web Development and Information Technology Articles for Creative Developers");
        expect(feed.items.length).toBeGreaterThan(0);
    });

    it("should parse a feed from example WordPress", async () => {
        const feed: any = await parseFeed(wordpressTestFile);
        expect(feed.title).toBe("Ryan Hayes");
        expect(feed.link).toBe("https://ryanhayes.net/");
        expect(feed.description).toBe("Software and Startup Skills to Boost Your Business and Career");
        expect(feed.items.length).toBeGreaterThan(0);
    });

    it("should parse a feed from remote WordPress", async ({ skip }) => {
        const url = new URL("https://ryanhayes.net/feed/");
        const feed: any = await ParseRSSFeed(url).catch((error) => {
            if (error.message.includes("Failed to fetch feed: Forbidden")) {
                console.log(error.message);
                skip();
            }
        });
        expect(feed.title).toBe("Ryan Hayes");
        expect(feed.link).toBe("https://ryanhayes.net/");
        expect(feed.description).toBe("Software and Startup Skills to Boost Your Business and Career");
        expect(feed.items.length).toBeGreaterThan(0);
    });
});