---
source_repo: https://github.com/openclaw/openclaw
source_file: extensions/memory-wiki/skills/obsidian-vault-maintainer/SKILL.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

---
name: obsidian-vault-maintainer
description: Maintain an Obsidian-friendly memory wiki vault with wikilinks, frontmatter, and official Obsidian CLI awareness.
---

Use this skill when the memory-wiki vault render mode is `obsidian` or the user wants the wiki to play nicely with Obsidian.

- Start from `openclaw wiki status` to confirm the vault mode and whether the official Obsidian CLI is available.
- Use `openclaw wiki obsidian status` before shelling out, then prefer the dedicated helpers like `openclaw wiki obsidian search`, `openclaw wiki obsidian open`, `openclaw wiki obsidian command`, and `openclaw wiki obsidian daily`.
- Prefer `[[Wikilinks]]`, stable filenames, and frontmatter that works with Obsidian dashboards and Dataview-style queries.
- Keep generated sections deterministic so Obsidian users can safely add handwritten notes around them.
- If the official Obsidian CLI is enabled, probe it before depending on it. Do not assume the app is installed, running, or configured.
- Avoid destructive renames unless you also have a link-repair plan.
