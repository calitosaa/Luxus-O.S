# 08 — Programación

> Todos los lenguajes de programación, sus internals, paradigmas, compiladores e intérpretes.

## Mapa del dominio

```
08-programacion/
├── paradigmas/
│   ├── orientado-objetos.md
│   ├── funcional.md
│   ├── reactivo.md
│   └── logico.md
├── python/
│   ├── cpython-internals.md           # GIL, bytecode, memory model
│   ├── python-gc.md                   # Reference counting, cyclic GC
│   ├── python-async.md                # asyncio event loop, coroutines
│   └── python-metaclasses.md
├── javascript-typescript/
│   ├── v8-internals.md                # Ignition, TurboFan, shapes
│   ├── event-loop.md                  # Microtasks, macrotasks, libuv
│   ├── typescript-type-system.md      # Structural typing, generics, inference
│   └── es2025-features.md
├── rust/
│   ├── ownership-borrowing.md         # Ownership rules, borrow checker
│   ├── lifetimes.md
│   ├── async-rust.md                  # Future trait, Pin, async runtime
│   └── unsafe-rust.md
├── go/
│   ├── goroutines-scheduler.md        # GMP model, work stealing
│   ├── channels-select.md
│   ├── go-gc.md                       # Tri-color mark, concurrent GC
│   └── go-interfaces.md              # Interface tables, dynamic dispatch
├── c/
│   ├── punteros-memoria.md            # Stack, heap, pointer arithmetic
│   ├── undefined-behavior.md
│   └── c-abi.md                       # Calling conventions, ABI stability
├── cpp/
│   ├── raii.md
│   ├── templates.md                   # Template metaprogramming, concepts
│   ├── cpp20-23.md                    # Concepts, ranges, coroutines, modules
│   └── move-semantics.md
├── java/
│   ├── jvm-internals.md               # Class loading, bytecode, JIT
│   ├── java-gc.md                     # G1GC, ZGC, Shenandoah
│   └── virtual-threads.md             # Project Loom
├── compiladores/
│   ├── analisis-lexico.md
│   ├── analisis-sintactico.md
│   ├── optimizacion-ir.md
│   └── llvm/
│       ├── llvm-ir.md
│       └── llvm-passes.md
├── webassembly/
│   ├── wasm-binary-format.md
│   ├── wasm-stack-machine.md
│   └── wasi.md
└── _index.md
```

## Topics pendientes

- [ ] CPython GIL internals — fuente: [CPython source: Python/ceval_gil.c](https://github.com/python/cpython/blob/main/Python/ceval_gil.c)
- [ ] V8 TurboFan JIT pipeline — fuente: [V8 blog](https://v8.dev/blog)
- [ ] Rust borrow checker — fuente: [Rust Reference](https://doc.rust-lang.org/reference/)
- [ ] Go GMP scheduler — fuente: [Go source: runtime/proc.go](https://github.com/golang/go/blob/master/src/runtime/proc.go)
- [ ] JVM G1GC regions — fuente: [JVM GC Tuning Guide](https://docs.oracle.com/en/java/javase/21/gctuning/)
- [ ] Wasm binary format — fuente: [WebAssembly spec](https://webassembly.github.io/spec/core/)
- [ ] TLA+ model checking — fuente: [Specifying Systems (Lamport, 2002)](https://lamport.azurewebsites.net/tla/book.html)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 7 |

---

*Última actualización: 2026-05*
