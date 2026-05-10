# 15 — Frontend

> Browser internals, HTML semántico, CSS avanzado, React/Vue/Svelte internals, Next.js, WebGL/WebGPU y performance web.

## Mapa del dominio

```
15-frontend/
├── browser/
│   ├── rendering-pipeline.md          # DOM → CSSOM → Layout → Paint → Composite
│   ├── event-loop-browser.md          # Task queue, microtask, requestAnimationFrame
│   ├── javascript-engine.md           # V8, SpiderMonkey, JavaScriptCore
│   └── web-apis.md                    # Intersection Observer, ResizeObserver, etc.
├── html/
│   ├── semantico.md
│   └── web-components.md              # Custom elements, Shadow DOM, slots
├── css/
│   ├── cascade-specificity.md
│   ├── flexbox-internals.md
│   ├── grid-internals.md
│   ├── css-variables.md
│   └── container-queries.md
├── react/
│   ├── react-fiber.md                 # Fiber architecture, reconciler
│   ├── react-hooks.md                 # useState, useEffect, useReducer internals
│   ├── react-concurrent.md            # Suspense, transitions, startTransition
│   └── react-server-components.md    # RSC architecture, server actions
├── vue/
│   ├── vue-reactivity.md              # Proxy-based reactivity system
│   └── vue-composables.md
├── nextjs/
│   ├── app-router.md                  # React Server Components in Next.js
│   └── nextjs-caching.md             # Fetch cache, Data Cache, Router Cache
├── performance/
│   ├── core-web-vitals.md             # LCP, CLS, INP, FID
│   ├── bundling-optimization.md       # Tree shaking, code splitting, chunks
│   └── resource-hints.md              # preload, prefetch, preconnect
├── webgl-webgpu/
│   ├── webgl-pipeline.md
│   └── webgpu-compute.md
└── _index.md
```

## Topics pendientes

- [ ] React Fiber reconciler — fuente: [React source: packages/react-reconciler](https://github.com/facebook/react/tree/main/packages/react-reconciler)
- [ ] Chrome rendering pipeline — fuente: [Chromium rendering architecture docs](https://www.chromium.org/developers/design-documents/rendering/)
- [ ] Next.js App Router caching — fuente: [Next.js docs: Caching](https://nextjs.org/docs/app/building-your-application/caching)
- [ ] WebGPU compute shaders — fuente: [WebGPU spec](https://www.w3.org/TR/webgpu/)
- [ ] CSS Container Queries — fuente: [CSS Containment Level 3 spec](https://www.w3.org/TR/css-contain-3/)

## Estadísticas

| Métrica | Valor |
|---------|-------|
| Archivos totales | 0 |
| Archivos completos (✅) | 0 |
| Stubs (📋) | 0 |
| Topics pendientes | 5 |

---

*Última actualización: 2026-05*
