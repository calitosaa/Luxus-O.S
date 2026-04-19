---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/70.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def strange_sort_list(lst):
    '''
    Given list of integers, return list in strange order.
    Strange sorting, is when you start with the minimum value,
    then maximum of the remaining integers, then minimum and so on.

    Examples:
    strange_sort_list([1, 2, 3, 4]) == [1, 4, 2, 3]
    strange_sort_list([5, 5, 5, 5]) == [5, 5, 5, 5]
    strange_sort_list([]) == []
    '''
    if not lst:
        return []
    
    sorted_lst = sorted(lst)
    result = []
    take_min = True
    
    while sorted_lst:
        if take_min:
            result.append(sorted_lst.pop(0))
        else:
            result.append(sorted_lst.pop())
        take_min = not take_min
    
    return result