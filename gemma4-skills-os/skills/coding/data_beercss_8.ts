---
source_repo: https://github.com/beercss/beercss
source_file: src/gmail/data.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type Ref, ref } from "vue";
import { type IGmail } from "./interfaces";
import theme from "../shared/theme";

const drafts = [];
while (drafts.length < 1) { drafts.push({ check: false, star: false }); }

const inbox = [];
while (inbox.length < 30) { inbox.push({ check: false, star: false }); }

const sent = [];
while (sent.length < 5) { sent.push({ check: false, star: false }); }

const data: IGmail = {
  ...theme,
  drafts,
  inbox,
  sent,
  important: [],
  snoozed: [],
  spam: [],
  emails: [],
  check: false,
  url: "/gmail",
  isMax: true,
};

const dataAsRef: Ref<IGmail> = ref(data);

export default dataAsRef;
