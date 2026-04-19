---
source_repo: https://github.com/ruvnet/ruflo
source_file: v3/plugins/gastown-bridge/src/types/uuid.d.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

/**
 * Type declarations for uuid module
 */
declare module 'uuid' {
  export function v4(): string;
  export function v1(): string;
  export function v3(name: string, namespace: string): string;
  export function v5(name: string, namespace: string): string;
  export function validate(uuid: string): boolean;
  export function version(uuid: string): number;
  export function parse(uuid: string): Uint8Array;
  export function stringify(arr: Uint8Array): string;
  export const NIL: string;
}
