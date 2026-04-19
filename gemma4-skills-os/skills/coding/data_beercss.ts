---
source_repo: https://github.com/beercss/beercss
source_file: src/netflix/data.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type Ref, ref } from "vue";
import { type INetflix } from "./interfaces";
import dataTheme from "../shared/theme";

const data: INetflix = {
  todaysRanking: [
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
  ],
  series: [
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
  ],
  movies: [
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
  ],
  hot: [
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
  ],
  myList: [
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
  ],
  ...dataTheme,
};

const dataAsRef: Ref<INetflix> = ref(data);

export default dataAsRef;
