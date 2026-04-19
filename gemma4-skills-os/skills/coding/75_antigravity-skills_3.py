---
source_repo: https://github.com/sickn33/antigravity-awesome-skills
source_file: skills/loki-mode/benchmarks/results/2026-01-05-00-49-17/humaneval-solutions/75.py
license: MIT
category: skills/coding
imported_at: 2026-04-19
---

def is_multiply_prime(a):
    """Write a function that returns true if the given number is the multiplication of 3 prime numbers
    and false otherwise.
    Knowing that (a) is less then 100. 
    Example:
    is_multiply_prime(30) == True
    30 = 2 * 3 * 5
    """
    def is_prime(n):
        if n < 2:
            return False
        for i in range(2, int(n ** 0.5) + 1):
            if n % i == 0:
                return False
        return True
    
    primes = [i for i in range(2, 100) if is_prime(i)]
    
    for i in primes:
        if i > a:
            break
        if a % i == 0:
            for j in primes:
                if i * j > a:
                    break
                if a % (i * j) == 0:
                    k = a // (i * j)
                    if is_prime(k):
                        return True
    return False