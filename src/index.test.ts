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

  it("should return 200 response", async () => {
    const response = await worker.fetch(`http://${worker.address}:8787/`);
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("text/plain;charset=UTF-8");
    const responseBody: any = await response.text(); // text because we return c.text('Hello World!');
    expect(responseBody).toBe("Hello World!");
  });
});