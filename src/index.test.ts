import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { SELF } from "cloudflare:test";
import "../src/"; // Currently required to automatically rerun tests when `main` changes

describe("Worker", () => {
  it("base path should return 200 response", async () => {
    const response = await SELF.fetch(`http://localhost:8787/`);
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe("application/json; charset=UTF-8");
    const responseBody: any = await response.json();
    expect(responseBody).toEqual({ message: "Hello World!" });
  });
});