---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: tools/scripts/tests/test_last30days_skill_security.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

import unittest
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[3]
SKILL_PATH = REPO_ROOT / "skills" / "last30days" / "SKILL.md"


class Last30DaysSkillSecurityTests(unittest.TestCase):
    def test_skill_does_not_embed_user_arguments_directly_in_shell_command(self):
        content = SKILL_PATH.read_text(encoding="utf-8")

        self.assertNotIn('last30days.py "$ARGUMENTS"', content)
        self.assertIn("cat <<'LAST30DAYS_TOPIC'", content)


if __name__ == "__main__":
    unittest.main()
