---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/@claude-flow/plugins/src/types/pg.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

// pg is a user-installed optional dependency, not bundled
declare module 'pg' {
  const pg: any;
  export default pg;
  export const Pool: any;
  export const Client: any;
}
