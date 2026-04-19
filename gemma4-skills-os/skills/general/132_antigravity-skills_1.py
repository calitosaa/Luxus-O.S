---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: plugins/antigravity-awesome-skills-claude/skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/132.py
license: MIT
category: skills/general
imported_at: 2026-04-19
---

def is_nested(string):
    '''
    Create a function that takes a string as input which contains only square brackets.
    The function should return True if and only if there is a valid subsequence of brackets 
    where at least one bracket in the subsequence is nested.

    is_nested('[[]]') ➞ True
    is_nested('[]]]]]]][[[[[]') ➞ False
    is_nested('[][]') ➞ False
    is_nested('[]') ➞ False
    is_nested('[[][]]') ➞ True
    is_nested('[[]][[') ➞ True
    '''
    opening_bracket_index = []
    closing_bracket_index = []
    
    for i, c in enumerate(string):
        if c == '[':
            opening_bracket_index.append(i)
        else:
            closing_bracket_index.append(i)
    
    closing_bracket_index.reverse()
    
    cnt = 0
    i = 0
    j = 0
    
    while i < len(opening_bracket_index) and j < len(closing_bracket_index):
        if opening_bracket_index[i] < closing_bracket_index[j]:
            cnt += 1
            i += 1
        else:
            j += 1
    
    return cnt >= 2