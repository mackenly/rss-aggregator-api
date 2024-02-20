import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { PlatformProxy } from "wrangler";
import { getPlatformProxy } from "wrangler";

import { setupDb } from "./setup";

describe("Setup process", () => {

    let platform: PlatformProxy;
    let env: any;

    beforeAll(async () => {
        platform = await getPlatformProxy();
        env = platform.env;
    });

    afterAll(async () => {
        await platform.dispose();
    });

    it("should successfully setup the database", async () => {
        const result = await setupDb(env, true);
        expect(result).toBe(true);
    });
});