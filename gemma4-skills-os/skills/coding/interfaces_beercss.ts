---
source_repo: https://github.com/beercss/beercss
source_file: src/netflix/interfaces.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type ILayout } from "../shared/interfaces";

export interface IImageNetflix {
  image: string,
}

export interface INetflix extends ILayout {
  todaysRanking: Array<IImageNetflix>,
  series: Array<IImageNetflix>,
  movies: Array<IImageNetflix>,
  hot: Array<IImageNetflix>,
  myList: Array<IImageNetflix>,
}
