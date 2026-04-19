---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/111.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def histogram(test):
    """Given a string representing a space separated lowercase letters, return a dictionary
    of the letter with the most repetition and containing the corresponding count.
    If several letters have the same occurrence, return all of them.
    
    Example:
    histogram('a b c') == {'a': 1, 'b': 1, 'c': 1}
    histogram('a b b a') == {'a': 2, 'b': 2}
    histogram('a b c a b') == {'a': 2, 'b': 2}
    histogram('b b b b a') == {'b': 4}
    histogram('') == {}

    """
    if not test or test.strip() == '':
        return {}
    
    letters = test.split()
    counts = {}
    
    for letter in letters:
        counts[letter] = counts.get(letter, 0) + 1
    
    if not counts:
        return {}
    
    max_count = max(counts.values())
    
    return {letter: count for letter, count in counts.items() if count == max_count}