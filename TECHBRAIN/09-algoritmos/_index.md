# 09 — Algoritmos

> Algoritmos y estructuras de datos con análisis de correctitud, complejidad y benchmarks reales.

## Mapa del dominio

```
09-algoritmos/
├── estructuras-datos/
│   ├── arrays-strings.md
│   ├── linked-lists.md
│   ├── stacks-queues.md
│   ├── hash-tables.md                 # Open addressing, chaining, Robin Hood
│   ├── arboles/
│   │   ├── binary-search-tree.md
│   │   ├── avl-tree.md
│   │   ├── red-black-tree.md          # Linux CFS scheduler uses this
│   │   ├── b-tree.md                  # Databases, filesystems
│   │   └── trie.md
│   ├── heaps.md                       # Min/max heap, Fibonacci heap
│   └── grafos/
│       ├── representacion.md
│       └── union-find.md
├── sorting/
│   ├── comparison-sorts.md            # Quicksort, mergesort, heapsort
│   ├── non-comparison-sorts.md        # Counting, radix, bucket
│   └── sorting-en-practica.md         # Timsort, pdqsort, parallel sort
├── grafos/
│   ├── bfs-dfs.md
│   ├── shortest-path.md               # Dijkstra, Bellman-Ford, SPFA
│   ├── mst.md                         # Kruskal, Prim
│   ├── flujo-redes.md                 # Ford-Fulkerson, Dinic
│   └── matching.md                    # Bipartite, Hungarian algorithm
├── strings/
│   ├── kmp.md                         # KMP failure function, complexity proof
│   ├── rabin-karp.md
│   ├── aho-corasick.md
│   └── suffix-arrays.md
├── numericos/
│   ├── fast-exponentiation.md
│   ├── gcd-lcm.md
│   ├── prime-sieve.md
│   └── fft.md                         # Fast Fourier Transform
├── dp/
│   ├── memoization-tabulation.md
│   ├── dp-patrones.md                 # LCS, LIS, knapsack, DP on trees
│   └── dp-bitmask.md
├── geometria-computacional/
│   ├── convex-hull.md
│   └── sweep-line.md
├── aproximacion/
│   ├── algoritmos-greedy.md
│   └── metaheuristicas.md
└── _index.md
```

## Topics pendientes

- [ ] Red-black tree rotations y balancing — fuente: [CLRS 4th ed.]
- [ ] Timsort — fuente: [Python Timsort implementation notes](https://github.com/python/cpython/blob/main/Objects/listsort.txt)
- [ ] Fibonacci heap para Dijkstra — fuente: [CLRS cap. 19]
- [ ] Suffix Array + LCP — fuente: [Kasai et al. 2001]
- [ ] FFT: Cooley-Tukey algorithm — fuente: [CLRS cap. 30]

## Prereqs recomendados

- Matemáticas → [[../10-matematicas/_index.md]]

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*
