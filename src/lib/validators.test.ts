import { describe, expect, it } from "vitest";

import { ValidateFeedUrl } from "./validators";

describe("Validators", () => {
    it("should validate a valid feed url", () => {
        const url = "https://crtv.dev/feed";
        expect(() => ValidateFeedUrl(url)).not.toThrow();
    });

    it("should throw an error for an invalid feed url without protocol", () => {
        const url = "crtv.dev/feed";
        expect(() => ValidateFeedUrl(url)).toThrow();
    });

    it("should throw an error for an invalid feed url without domain", () => {
        const url = "https://";
        expect(() => ValidateFeedUrl(url)).toThrow();
    });

    it("should throw an error for an http feed url", () => {
        const url = "http://crtv.dev/feed";
        expect(() => ValidateFeedUrl(url)).toThrow();
    });

    it("should work with query parameters", () => {
        const url = "https://crtv.dev/feed?param=1";
        expect(() => ValidateFeedUrl(url)).not.toThrow();
    });
});