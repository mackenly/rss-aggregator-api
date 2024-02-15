import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { UnstableDevWorker } from "wrangler";
import { unstable_dev } from "wrangler";

describe.sequential("Feed Processor", () => {

    let worker: UnstableDevWorker;

    beforeAll(async () => {
        worker = await unstable_dev("src/index.ts", {
            experimental: { disableExperimentalWarning: false },
        });
    });

    afterAll(async () => {
        await worker.stop();
    });

    it("setup should return 200 response", async () => {
        const response = await worker.fetch(`http://${worker.address}:8787/setup`);
        expect(response.status).toBe(200);
        expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
        const responseBody: any = await response.json();
        expect(responseBody).toEqual({ message: "Setup complete" });
    });

    it("sites should return 200 response when no sites exist", async () => {
        const response = await worker.fetch(`http://${worker.address}:8787/sites`);
        expect(response.status).toBe(200);
        expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
        const responseBody: any = await response.json();
        expect(responseBody).toEqual([]);
    });

    it("sites should return 200 response when creating a site", async () => {
        const response = await worker.fetch(`http://${worker.address}:8787/sites`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: "https://crtv.dev/feed" }),
        });
        expect(response.status).toBe(200);
        expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
        const responseBody: any = await response.json();
        expect(responseBody).toEqual({
            id: 1,
        });
    });

    it("sites should return 200 response when sites exist", async () => {
        const response = await worker.fetch(`http://${worker.address}:8787/sites`);
        expect(response.status).toBe(200);
        expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
        const responseBody: any = await response.json();
        expect(responseBody.length).toBe(1);
        expect(responseBody[0].rss_url).toBe("https://crtv.dev/feed");
        expect(responseBody[0].link).toBe("https://crtv.dev/");
    });

    // TODO Update test to use PUT method

    it("sites should return 200 response when deleting a site", async () => {
        const response = await worker.fetch(`http://${worker.address}:8787/sites`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: 1 }),
        });
        expect(response.status).toBe(200);
        expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
        const responseBody: any = await response.json();
        expect(responseBody).toEqual({
            id: 1,
        });
    });

    it("sites should return 200 response when no sites exist", async () => {
        const response = await worker.fetch(`http://${worker.address}:8787/sites`);
        expect(response.status).toBe(200);
        expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
        const responseBody: any = await response.json();
        expect(responseBody).toEqual([]);
    });
});