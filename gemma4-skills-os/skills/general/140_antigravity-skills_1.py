---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/140.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

def fix_spaces(text):
    """
    Given a string text, replace all spaces in it with underscores, 
    and if a string has more than 2 consecutive spaces, 
    then replace all consecutive spaces with - 
    
    fix_spaces("Example") == "Example"
    fix_spaces("Example 1") == "Example_1"
    fix_spaces(" Example 2") == "_Example_2"
    fix_spaces(" Example   3") == "_Example-3"
    """
    result = []
    i = 0
    while i < len(text):
        if text[i] == ' ':
            # Count consecutive spaces
            space_count = 0
            while i < len(text) and text[i] == ' ':
                space_count += 1
                i += 1
            # If more than 2 consecutive spaces, replace with -
            if space_count > 2:
                result.append('-')
            else:
                # Replace each space with underscore
                result.append('_' * space_count)
        else:
            result.append(text[i])
            i += 1
    return ''.join(result)