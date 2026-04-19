---
source_repo: https://github.com/thedotmack/claude-mem
source_file: src/types/tree-kill.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

declare module 'tree-kill' {
  export default function treeKill(
    pid: number,
    signal?: string,
    callback?: (error?: Error | null) => void
  ): void;
}
