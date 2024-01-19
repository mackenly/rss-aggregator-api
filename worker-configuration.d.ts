import { Ai } from "@cloudflare/ai";

interface Bindings {
	DB: D1Database;
	AI: Ai;
	VECTORIZE_INDEX: VectorizeIndex;
	SIMILARITY_CUTOFF: number;
	TOP_K: number;
}