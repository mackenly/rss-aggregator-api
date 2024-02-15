import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ParseRSSFeed, testFunctions } from "./rss-parser";
import fs from "fs";

describe("Rss Parser", () => {

    it("should parse a feed from example Ghost", async () => {
        const feed: any = await fs.promises.readFile("test_examples\\crtv.dev.xml").then(data => testFunctions.parseFeed(data.toString()));
        expect(feed.title).toBe("CRTV DEV");
        expect(feed.link).toBe("https://crtv.dev/");
        expect(feed.description).toBe("Web Development and Information Technology Articles for Creative Developers");
        expect(feed.items.length).toBeGreaterThan(0);
    });

    it("should parse a feed from remote Ghost", async () => {
        const feed: any = await ParseRSSFeed("https://crtv.dev/feed");
        expect(feed.title).toBe("CRTV DEV");
        expect(feed.link).toBe("https://crtv.dev/");
        expect(feed.description).toBe("Web Development and Information Technology Articles for Creative Developers");
        expect(feed.items.length).toBeGreaterThan(0);
    });

    it("should parse a feed from example WordPress", async () => {
        const feed: any = await fs.promises.readFile("test_examples\\ryanhayes.net.txt").then(data => testFunctions.parseFeed(data.toString()));
        expect(feed.title).toBe("Ryan Hayes");
        expect(feed.link).toBe("https://ryanhayes.net/");
        expect(feed.description).toBe("People First, Software Second");
        expect(feed.items.length).toBeGreaterThan(0);
    });

    it("should parse a feed from remote WordPress", async () => {
        const feed: any = await ParseRSSFeed("https://ryanhayes.net/feed/");
        expect(feed.title).toBe("Ryan Hayes");
        expect(feed.link).toBe("https://ryanhayes.net/");
        expect(feed.description).toBe("People First, Software Second");
        expect(feed.items.length).toBeGreaterThan(0);
    });
});