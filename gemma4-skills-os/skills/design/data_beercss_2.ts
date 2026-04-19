---
source_repo: https://github.com/beercss/beercss
source_file: src/dynamicColors/data.ts
license: MIT
category: skills/design
imported_at: 2026-04-19
---

import { ref, type Ref } from "vue";
import { type IDynamicColors } from "./interfaces";
import theme from "../shared/theme";

const data: IDynamicColors = {
  ...theme,
  showPage: false,
};

const dataAsRef: Ref<IDynamicColors> = ref(data);

export default dataAsRef;
