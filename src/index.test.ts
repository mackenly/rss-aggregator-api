import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { UnstableDevWorker } from "wrangler";
import { unstable_dev } from "wrangler";

describe("Worker", () => {

  let worker: UnstableDevWorker;

  beforeAll(async () => {
    worker = await unstable_dev("src/index.ts", {
      experimental: { disableExperimentalWarning: false },
    });
  });

  afterAll(async () => {
    await worker.stop();
  });

  it("base path should return 200 response", async () => {
    const response = await worker.fetch(`http://${worker.address}:8787/`);
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
    const responseBody: any = await response.json();
    expect(responseBody).toEqual({ message: "Hello World!" });
  });
});