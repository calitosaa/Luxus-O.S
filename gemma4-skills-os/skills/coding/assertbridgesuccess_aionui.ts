---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pages/conversation/platforms/assertBridgeSuccess.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

type BridgeResult<T = unknown> =
  | {
      success: boolean;
      data?: T;
      msg?: string;
    }
  | null
  | undefined;

export const assertBridgeSuccess = <T>(
  result: BridgeResult<T>,
  fallbackMessage: string
): {
  success: true;
  data?: T;
} => {
  if (result?.success === true) {
    return result as {
      success: true;
      data?: T;
    };
  }

  throw new Error(result?.msg || fallbackMessage);
};
