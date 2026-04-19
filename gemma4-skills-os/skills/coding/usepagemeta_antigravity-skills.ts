---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: apps/web-app/src/hooks/usePageMeta.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { useEffect } from 'react';
import type { SeoMeta } from '../types';
import { setPageMeta } from '../utils/seo';

export function usePageMeta(meta: SeoMeta): void {
  useEffect(() => {
    setPageMeta(meta);
  }, [meta]);
}
