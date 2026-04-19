---
source_repo: https://github.com/beercss/beercss
source_file: src/gmail/domain.ts
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import { type IItemGmail } from "./interfaces";

const checkAll = (emails: Array<IItemGmail>, check: boolean) => {
  for (let i = 0; i < emails.length; i++) { emails[i].check = check; }
};

const check = (email: IItemGmail) => {
  email.check = !email.check;
};

const star = (email: IItemGmail) => {
  email.star = !email.star;
};

export default {
  checkAll,
  check,
  star,
};
