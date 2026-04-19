---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/renderer/pet/pet.d.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

interface PetAPI {
  onStateChange: (cb: (state: string) => void) => void;
  onEyeMove: (cb: (data: { eyeDx: number; eyeDy: number; bodyDx: number; bodyRotate: number }) => void) => void;
  onResize: (cb: (size: number) => void) => void;
}

interface PetHitAPI {
  dragStart: () => void;
  dragEnd: () => void;
  click: (data: { side: string; count: number }) => void;
  contextMenu: () => void;
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void;
  onHitReset: (cb: () => void) => void;
}

interface PetConfirmAPI {
  onConfirmationAdd: (callback: (data: any) => void) => void;
  onConfirmationUpdate: (callback: (data: any) => void) => void;
  onConfirmationRemove: (callback: (data: any) => void) => void;
  onThemeChange: (callback: (theme: string) => void) => void;
  respond: (data: { conversation_id: string; msg_id: string; callId: string; data: any }) => void;
  dragStart: () => void;
  dragEnd: () => void;
}

interface Window {
  petAPI: PetAPI;
  petHitAPI: PetHitAPI;
  petConfirmAPI: PetConfirmAPI;
}
