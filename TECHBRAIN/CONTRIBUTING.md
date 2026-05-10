# Contribuir a TECHBRAIN

## Regla #1: No inventas. No generas. No rellenas.

Cada dato técnico, fórmula, protocolo, algoritmo, comando, patrón de código, técnica de seguridad, definición matemática, o cualquier afirmación técnica **DEBE** provenir de una fuente real y verificable.

Si no encuentras la fuente, escribe `[NEEDS_SOURCE: descripción exacta de lo que falta]` y sigue. **Nunca inventes un hecho.**

---

## Proceso para añadir contenido

### Antes de crear cualquier archivo

Busca en TODAS estas fuentes relevantes para el tema:

1. **Especificaciones oficiales**: RFCs (rfc-editor.org), W3C specs (w3.org/TR), IEEE standards, 3GPP, ETSI, POSIX, ECMA
2. **Papers**: arXiv, ACM DL, IEEE Xplore, USENIX, NeurIPS, ICML, ICLR, Papers With Code
3. **Código fuente real**: Linux kernel (elixir.bootlin.com), CPython, V8, LLVM, repos con miles de estrellas
4. **Documentación oficial**: docs del proyecto/empresa (AWS, GCP, Azure, Kubernetes, Docker, etc.)
5. **Cursos certificados**: Google Cloud Skills Boost, Microsoft Learn, AWS Training, Linux Foundation
6. **Libros canónicos**: CSAPP, OSTEP, CLRS, SICP, Designing Data-Intensive Applications

### Estructura de búsqueda (obligatoria)

```
1. web_search: "[topic] internals deep dive"
2. web_search: "[topic] RFC OR spec site:ietf.org OR site:w3.org"
3. web_search: "[topic] research paper arxiv"
4. web_search: "[topic] source code site:github.com"
5. web_search: "[topic] course syllabus MIT OR Stanford OR CMU"
6. web_search: "site:github.com [topic] awesome"
```

### Crear el archivo

Usa el [template estándar](./_templates/topic-template.md). Cada campo del frontmatter es obligatorio.

### Después de crear el archivo

1. Lista 10–15 sub-topics que podrían ser archivos propios
2. Crea stubs para los que tengan fuentes
3. Actualiza el `_index.md` del directorio padre
4. Añade links bidireccionales en archivos relacionados
5. Si quedan secciones sin fuente, marca con `[NEEDS_SOURCE]`

---

## Reglas de granularidad

**Nunca un solo archivo para un tema grande. Siempre carpeta con múltiples archivos.**

```
❌ MAL: tcp.md
✅ BIEN: tcp/
   ├── tcp-handshake.md
   ├── tcp-flow-control.md
   ├── tcp-congestion-control-cubic.md
   ├── tcp-congestion-control-bbr.md
   ├── tcp-state-machine.md
   └── tcp-security.md
```

---

## Niveles de calidad

| Nivel | Descripción |
|-------|-------------|
| ✅ Completo | Todas las secciones con fuentes, código compilable, benchmarks reales |
| 🔶 Parcial | Estructura completa, algunas secciones con `[NEEDS_SOURCE]` |
| 📋 Stub | Frontmatter + estructura vacía, fuentes identificadas pero contenido pendiente |

---

## Qué NO hacer

- No copiar/pegar de Wikipedia
- No resumir sin citar
- No añadir "explicaciones para principiantes"
- No crear archivos enormes (>500 líneas) sobre un tema amplio — divide en sub-archivos
- No añadir links sin comprobar que funcionan
- No escribir pseudocódigo donde hay código fuente real disponible

---

## Tipos de fuente válidos en frontmatter

```yaml
sources:
  - url: "https://www.rfc-editor.org/rfc/rfc9293"
    title: "RFC 9293: Transmission Control Protocol"
    type: "spec"
  - url: "https://arxiv.org/abs/2205.14135"
    title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    type: "paper"
  - url: "https://elixir.bootlin.com/linux/latest/source/net/ipv4/tcp_input.c"
    title: "Linux kernel tcp_input.c"
    type: "sourcecode"
  - url: "https://docs.kernel.org/networking/tcp.html"
    title: "Linux TCP documentation"
    type: "docs"
  - url: "https://cs144.github.io/"
    title: "Stanford CS144: Introduction to Computer Networking"
    type: "course"
```

Tipos válidos: `spec`, `paper`, `docs`, `course`, `book`, `sourcecode`, `blog`, `talk`
