---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/common/types/pptx2json.d.ts
license: MIT
category: plugins/presentation
imported_at: 2026-04-19
---

/**
 * Type declarations for pptx2json
 */
declare module 'pptx2json' {
  export default class PPTX2Json {
    constructor();
    toJson(filePath: string): Promise<any>;
    toPPTX(json: any, options?: { file?: string }): Promise<Buffer>;
    getMaxSlideIds(json: any): { id: number; rid: number };
    getSlideLayoutTypeHash(json: any): Record<string, string>;
  }
}
