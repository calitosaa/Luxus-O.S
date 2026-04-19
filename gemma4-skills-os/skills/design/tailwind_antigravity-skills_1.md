---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills/skills/remotion-best-practices/rules/tailwind.md
license: MIT
category: skills/design
imported_at: 2026-04-19
---

---
name: tailwind
description: Using TailwindCSS in Remotion.
metadata:
---

You can and should use TailwindCSS in Remotion, if TailwindCSS is installed in the project.

Don't use `transition-*` or `animate-*` classes - always animate using the `useCurrentFrame()` hook.  

Tailwind must be installed and enabled first in a Remotion project - fetch  https://www.remotion.dev/docs/tailwind using WebFetch for instructions.