---
source_repo: https://github.com/beercss/beercss
source_file: src/musicPlayer/interfaces.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type ILayout } from "../shared/interfaces";

export interface IMusicPlayer extends ILayout {
  showPage: boolean,
  wallpaper: string,
  title: string,
  showWallpaper: boolean,
  time: number,
}
