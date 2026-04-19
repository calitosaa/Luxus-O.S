---
source_repo: https://github.com/beercss/beercss
source_file: src/youtube/domain.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import utils from "../shared/utils";

export const waitForImages = async () => {
  const check = () => {
    for (let i = 0; i < document.images.length; i++) {
      if (!document.images[i].complete || !document.images[i].naturalHeight) { return false; }
    }
    return true;
  };

  while (!check()) await utils.wait(500);

  return true;
};

export default {
  waitForImages,
};
