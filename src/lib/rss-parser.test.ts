import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ParseRSSFeed } from "./rss-parser";

describe("Rss Parser", () => {

    it("should parse a feed from Ghost", async () => {
        const feed: any = await ParseRSSFeed("https://crtv.dev/feed");
        expect(feed.title).toBe("CRTV DEV");
        expect(feed.link).toBe("https://crtv.dev/");
        expect(feed.description).toBe("Web Development and Information Technology Articles for Creative Developers");
        expect(feed.items.length).toBeGreaterThan(0);
    });

    it("should parse a feed from WordPress", async () => {
        const feed: any = await ParseRSSFeed("https://ryanhayes.net/feed/");
        expect(feed.title).toBe("Ryan Hayes");
        expect(feed.link).toBe("https://ryanhayes.net/");
        expect(feed.description).toBe("People First, Software Second");
        expect(feed.items.length).toBeGreaterThan(0);
    });
});