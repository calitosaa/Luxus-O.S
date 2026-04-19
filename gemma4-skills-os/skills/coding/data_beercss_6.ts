---
source_repo: https://github.com/beercss/beercss
source_file: src/home/data.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type IHome } from "./interfaces";
import theme from "../shared/theme";
import { type Ref, ref } from "vue";

const data: IHome = {
  ...theme,
  name: "",
  indexOfMenu: 1,
  samples: [],
  dialogSample: "",
  urlSample: "",
  svgSample: "",
  mediaCard: 1,
  mediaImage: 1,
  layout: 0,
  isHorizontal: false,
  isHorizontalSlider: true,
  isRtl: false,
  isMax: true,
  isExplore: false,
  isShowingSample: false,
  mediaShape: 1, 
};

const dataAsRef: Ref<IHome> = ref(data);

export default dataAsRef;
