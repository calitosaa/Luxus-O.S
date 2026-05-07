import { invoke } from "./ipc.ts";

export interface SkillHit {
  name: string;
  category: string;
  path: string;
  score: number;
  excerpt: string;
}

export async function searchSkills(query: string, k = 8): Promise<SkillHit[]> {
  return invoke<SkillHit[]>("rag_search_skills", { query, k });
}

export async function reindexSkills(): Promise<{ indexed: number; tookMs: number }> {
  return invoke("rag_reindex_skills");
}
