---
source_repo: https://github.com/beercss/beercss
source_file: src/youtube/data.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { ref, type Ref } from "vue";
import theme from "../shared/theme";
import { type IYoutube } from "./interfaces";

const data: IYoutube = {
  ...theme,
  itens: [
    { title: "Alok 01/2021", image: "/alok-001.webp" },
    { title: "Alok 01/2020", image: "/alok-002.webp" },
    { title: "Best of 2021", image: "/vintage-001.webp" },
    { title: "Best of 2020", image: "/vintage-002.webp" },
    { title: "Radio online", image: "/radio-001.webp" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.webp" },
    { title: "Alok 01/2021", image: "/alok-001.webp" },
    { title: "Alok 01/2020", image: "/alok-002.webp" },
  ],
  whatsHot: [
    { title: "Best of 2021", image: "/vintage-001.webp" },
    { title: "Best of 2020", image: "/vintage-002.webp" },
    { title: "Radio online", image: "/radio-001.webp" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.webp" },
    { title: "Alok 01/2021", image: "/alok-001.webp" },
    { title: "Alok 01/2020", image: "/alok-002.webp" },
    { title: "Best of 2021", image: "/vintage-001.webp" },
    { title: "Best of 2020", image: "/vintage-002.webp" },
  ],
  yourVideos: [
    { title: "Radio online", image: "/radio-001.webp" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.webp" },
    { title: "Alok 01/2021", image: "/alok-001.webp" },
    { title: "Alok 01/2020", image: "/alok-002.webp" },
    { title: "Best of 2021", image: "/vintage-001.webp" },
    { title: "Best of 2020", image: "/vintage-002.webp" },
    { title: "Radio online", image: "/radio-001.webp" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.webp" },
  ],
  isLoaded: false,
  url: "/youtube",
  check: false,
  isMax: true
};

const dataAsRef: Ref<IYoutube> = ref(data);

export default dataAsRef;
