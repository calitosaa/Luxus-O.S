---
source_repo: https://github.com/beercss/beercss
source_file: src/home/interfaces.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type ILayout } from "../shared/interfaces";

export interface ISample {
  html: string,
  sourceCode: string,
}

export interface IHome extends ILayout {
  indexOfMenu: number,
  samples: Array<ISample>,
  name: string,
  dialogSample: string,
  urlSample: string,
  svgSample: string,
  mediaCard: number,
  mediaImage: number,
  layout: number,
  isHorizontal: boolean,
  isHorizontalSlider: boolean,
  isRtl: boolean,
  isMax: boolean,
  isExplore: boolean,
  isShowingSample: boolean,
  mediaShape: number,
}
