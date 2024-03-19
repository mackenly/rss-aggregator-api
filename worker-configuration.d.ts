import { Ai } from "@cloudflare/ai";

interface Bindings {
	DB: D1Database;
	AI: Ai;
	VECTORIZE_INDEX: VectorizeIndex;
	SIMILARITY_CUTOFF: number;
	TOP_K: number;
}

declare module "cloudflare:test" {
	interface ProvidedEnv {
		// not sure why this here but the docs seem to want it: https://developers.cloudflare.com/workers/testing/vitest-integration/test-apis/#cloudflaretest-module-definition
		NAMESPACE: KVNamespace;
	}
	// ...or if you have an existing `Env` type...
	interface ProvidedEnv extends Bindings { }
}