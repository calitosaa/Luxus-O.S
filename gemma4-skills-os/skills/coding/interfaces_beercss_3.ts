---
source_repo: https://github.com/beercss/beercss
source_file: src/youtube/interfaces.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type ILayout } from "../shared/interfaces";

export interface IItemYoutube {
  title: string,
  image: string,
}

export interface IYoutube extends ILayout {
  itens: Array<IItemYoutube>,
  whatsHot: Array<IItemYoutube>,
  yourVideos: Array<IItemYoutube>,
  isLoaded: boolean,
  url: string,
  check: boolean,
  isMax: boolean
}
