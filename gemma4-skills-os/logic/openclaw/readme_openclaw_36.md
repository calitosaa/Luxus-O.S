---
source_repo: https://github.com/openclaw/openclaw
source_file: qa/README.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

# QA Scenarios

Seed QA assets for the private `qa-lab` extension.

Files:

- `scenarios/index.md` - canonical QA scenario pack, kickoff mission, and operator identity.
- `scenarios/<theme>/*.md` - one runnable scenario per markdown file.
- `frontier-harness-plan.md` - big-model bakeoff and tuning loop for harness work.
- `convex-credential-broker/` - standalone Convex v1 lease broker for pooled live credentials.

Key workflow:

- `qa suite` is the executable frontier subset / regression loop.
- `qa manual` is the scoped personality and style probe after the executable subset is green.
- `qa coverage` prints the scenario coverage inventory from scenario frontmatter.

Keep this folder in git. Add new scenarios here before wiring them into automation.
