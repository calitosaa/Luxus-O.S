---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/82.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def prime_length(string):
    """Write a function that takes a string and returns True if the string
    length is a prime number or False otherwise
    Examples
    prime_length('Hello') == True
    prime_length('abcdcba') == True
    prime_length('kittens') == True
    prime_length('orange') == False
    """
    length = len(string)
    if length < 2:
        return False
    if length == 2:
        return True
    if length % 2 == 0:
        return False
    for i in range(3, int(length ** 0.5) + 1, 2):
        if length % i == 0:
            return False
    return True