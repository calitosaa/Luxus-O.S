---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/136.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def largest_smallest_integers(lst):
    '''
    Create a function that returns a tuple (a, b), where 'a' is
    the largest of negative integers, and 'b' is the smallest
    of positive integers in a list.
    If there is no negative or positive integers, return them as None.

    Examples:
    largest_smallest_integers([2, 4, 1, 3, 5, 7]) == (None, 1)
    largest_smallest_integers([]) == (None, None)
    largest_smallest_integers([0]) == (None, None)
    '''
    negatives = [x for x in lst if x < 0]
    positives = [x for x in lst if x > 0]
    
    a = max(negatives) if negatives else None
    b = min(positives) if positives else None
    
    return (a, b)