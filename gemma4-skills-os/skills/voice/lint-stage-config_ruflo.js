---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/.husky/lint-stage-config.js
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

export default {
	"*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix", "eslint"],
	"*.json": ["prettier --write"],
};
