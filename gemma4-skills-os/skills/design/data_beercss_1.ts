---
source_repo: https://github.com/beercss/beercss
source_file: src/materialDesign3/data.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { ref, type Ref } from "vue";
import { type IMaterialDesign3 } from "./interfaces";
import theme from "../shared/theme";

const data: IMaterialDesign3 = {
  ...theme,
  showPage: false,
  isMax: true,
};

const dataAsRef: Ref<IMaterialDesign3> = ref(data);

export default dataAsRef;
