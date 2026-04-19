---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: mobile/src/utils/uuid.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

let counter = 0;

export function uuid(length = 8): string {
  try {
    if (typeof globalThis.crypto?.getRandomValues === 'function') {
      const bytes = new Uint8Array(Math.ceil(length / 2));
      globalThis.crypto.getRandomValues(bytes);
      return Array.from(bytes, (b) => b.toString(16).padStart(2, '0'))
        .join('')
        .slice(0, length);
    }
  } catch {}
  return (Date.now().toString(36) + (++counter).toString(36)).slice(0, length);
}
