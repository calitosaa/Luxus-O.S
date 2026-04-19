---
source_repo: https://github.com/beercss/beercss
source_file: src/cdn/elements/snackbars.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { queryAll, addClass, removeClass, blurActiveElement, onWeak } from "../utils";

let _timeoutSnackbar: ReturnType<typeof setTimeout>;

function onClickSnackbar(e: Event) {
  const snackbar = e.currentTarget as Element;
  removeClass(snackbar, "active");

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);
}

export function updateSnackbar(snackbar: Element, milliseconds?: number) {
  blurActiveElement();

  const activeSnackbars = queryAll(".snackbar.active");
  for(let i=0; i<activeSnackbars.length; i++) removeClass(activeSnackbars[i], "active");
  addClass(snackbar, "active");
  onWeak(snackbar, "click", onClickSnackbar);

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);

  if (milliseconds === -1) return;

  _timeoutSnackbar = setTimeout(() => {
    removeClass(snackbar, "active");
  }, milliseconds ?? 6000);
}