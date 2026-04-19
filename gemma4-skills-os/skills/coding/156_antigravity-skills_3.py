---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/156.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def int_to_mini_roman(number):
    """
    Given a positive integer, obtain its roman numeral equivalent as a string,
    and return it in lowercase.
    Restrictions: 1 <= num <= 1000

    Examples:
    >>> int_to_mini_roman(19) == 'xix'
    >>> int_to_mini_roman(152) == 'clii'
    >>> int_to_mini_roman(426) == 'cdxxvi'
    """
    val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4,
        1
    ]
    syms = [
        'm', 'cm', 'd', 'cd',
        'c', 'xc', 'l', 'xl',
        'x', 'ix', 'v', 'iv',
        'i'
    ]
    
    roman_num = ''
    i = 0
    while number > 0:
        for _ in range(number // val[i]):
            roman_num += syms[i]
            number -= val[i]
        i += 1
    return roman_num