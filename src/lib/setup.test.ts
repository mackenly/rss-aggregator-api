import { afterAll, beforeAll, describe, expect, it } from "vitest";
import type { UnstableDevWorker, PlatformProxy } from "wrangler";
import { unstable_dev, getPlatformProxy } from "wrangler";

import { setupDb } from "./setup";

describe("Setup process", () => {

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

    it("should successfully setup the database", async () => {
        const result = await setupDb(env, true);
        expect(result).toBe(true);
    });
});