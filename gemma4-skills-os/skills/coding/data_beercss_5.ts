---
source_repo: https://github.com/beercss/beercss
source_file: src/reddit/data.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { ref, type Ref } from "vue";
import { type IReddit } from "./interfaces";
import theme from "../shared/theme";

const data: IReddit = {
  ...theme,
  showPage: false,
};

const dataAsRef: Ref<IReddit> = ref(data);

export default dataAsRef;
