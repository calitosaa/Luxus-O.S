---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/humaneval-loki-solutions/93.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

# HumanEval/93
# Loki Mode Multi-Agent Solution
# Attempts: 1
# Passed: True

def encode(message):
    """
    Write a function that takes a message, and encodes in such a 
    way that it swaps case of all letters, replaces all vowels in 
    the message with the letter that appears 2 places ahead of that 
    vowel in the english alphabet. 
    Assume only letters. 
    
    Examples:
    >>> encode('test')
    'TGST'
    >>> encode('This is a message')
    'tHKS KS C MGSSCGG'
    """
    vowels = 'aeiouAEIOU'
    result = []
    
    for char in message:
        swapped = char.swapcase()
        if swapped in vowels:
            result.append(chr(ord(swapped) + 2))
        else:
            result.append(swapped)
    
    return ''.join(result)