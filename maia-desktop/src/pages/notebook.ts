import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";

interface Source {
  id: string;
  kind: "url" | "pdf" | "youtube" | "audio" | "image" | "text";
  title: string;
  size?: number;
  status: "indexed" | "indexing" | "error";
}

/**
 * Notebook (inspirado en NotebookLM) — agrupa fuentes en un "cuaderno"
 * y permite chat RAG sobre ellas + audio overview tipo podcast.
 */
@customElement("page-notebook")
export class PageNotebook extends LitElement {
  @state() private sources: Source[] = [];
  @state() private question = "";
  @state() private answer = "";
  @state() private busy = false;
  @state() private overviewUrl = "";

  static styles = css`
    :host { display: grid; grid-template-columns: 320px 1fr 320px; gap: 16px; height: calc(100vh - 96px); }
    aside, section { overflow: auto; }
    h2 { font: var(--md-sys-typescale-headline-medium); margin: 0 0 12px 0; }
    h3 { font: var(--md-sys-typescale-title-medium); margin: 12px 0 8px 0; color: var(--md-sys-color-on-surface-variant); }
    .src { display: flex; align-items: center; gap: 8px; font: var(--md-sys-typescale-body-medium); }
    .src .icon { font-family: "Material Symbols Outlined"; font-size: 18px; }
    .chat {
      background: var(--md-sys-color-surface-container);
      border-radius: var(--md-sys-shape-corner-extra-large);
      padding: 16px;
      height: 100%;
      display: flex; flex-direction: column;
    }
    .answer { flex: 1; overflow: auto; padding: 12px 0; font: var(--md-sys-typescale-body-large); }
    .question {
      display: flex; gap: 8px; padding: 12px;
      background: var(--md-sys-color-surface-container-high);
      border-radius: 28px;
    }
    input.q {
      flex: 1; border: 0; background: transparent;
      color: var(--md-sys-color-on-surface);
      font: var(--md-sys-typescale-body-large);
      outline: none;
    }
    button {
      all: unset; cursor: pointer; padding: 8px 16px; border-radius: 18px;
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      font: var(--md-sys-typescale-label-large-emphasized);
    }
    .drop {
      border: 2px dashed var(--md-sys-color-outline-variant);
      border-radius: var(--md-sys-shape-corner-large);
      padding: 16px; text-align: center;
      transition: background var(--md-sys-motion-duration-short3) var(--md-sys-motion-spring-default);
    }
    .drop[data-over="true"] { background: var(--md-sys-color-primary-container); border-color: var(--md-sys-color-primary); }
  `;

  connectedCallback() {
    super.connectedCallback();
    invoke<Source[]>("notebook_sources").then((s) => (this.sources = s)).catch(() => {});
  }

  private async addUrl() {
    const url = prompt("URL (web · YouTube · PDF):");
    if (!url) return;
    const s = await invoke<Source>("notebook_add_source", { kind: "url", payload: url });
    this.sources = [...this.sources, s];
  }

  private async ask() {
    if (!this.question.trim()) return;
    this.busy = true; this.answer = "";
    try {
      const r = await invoke<{ answer: string }>("notebook_ask", { question: this.question, sources: this.sources.map((s) => s.id) });
      this.answer = r.answer;
    } finally { this.busy = false; }
  }

  private async audioOverview() {
    const r = await invoke<{ url: string }>("notebook_audio_overview", { sources: this.sources.map((s) => s.id) });
    this.overviewUrl = r.url;
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    (e.currentTarget as HTMLElement).dataset.over = "false";
    const files = Array.from(e.dataTransfer?.files ?? []);
    files.forEach(async (f) => {
      const s = await invoke<Source>("notebook_add_source", { kind: "file", payload: (f as any).path ?? f.name });
      this.sources = [...this.sources, s];
    });
  }

  render() {
    return html`
      <aside>
        <h2>Fuentes</h2>
        <div class="drop"
             @dragover=${(e: DragEvent) => { e.preventDefault(); (e.currentTarget as HTMLElement).dataset.over = "true"; }}
             @dragleave=${(e: DragEvent) => { (e.currentTarget as HTMLElement).dataset.over = "false"; }}
             @drop=${this.onDrop}>
          Arrastra archivos aquí
          <div style="margin-top:8px">
            <button class="press-spring" @click=${this.addUrl}>+ URL / YouTube / PDF</button>
          </div>
        </div>

        <h3>${this.sources.length} fuentes</h3>
        ${this.sources.map((s) => html`
          <m3-card-morphing variant="outlined">
            <div class="src">
              <span class="icon">${iconOf(s.kind)}</span>
              <span style="flex:1">${s.title}</span>
              <span style="font-size:11px;opacity:.7">${s.status}</span>
            </div>
          </m3-card-morphing>`)}
      </aside>

      <section class="chat">
        <h2>Chat con tus fuentes</h2>
        <div class="answer">
          ${this.busy ? html`<m3-loading-expressive label="Pensando…"></m3-loading-expressive>` : this.answer || html`<span style="opacity:.6">Pregúntale al cuaderno…</span>`}
        </div>
        <div class="question">
          <input class="q" placeholder="¿Qué quieres saber?"
            .value=${this.question}
            @input=${(e: any) => (this.question = e.target.value)}
            @keydown=${(e: KeyboardEvent) => e.key === "Enter" && this.ask()} />
          <button class="press-spring" @click=${this.ask}>Preguntar</button>
        </div>
      </section>

      <aside>
        <h2>Overview</h2>
        <m3-card-morphing variant="tonal">
          <strong>Audio overview</strong>
          <p style="font-size:13px;opacity:.85">Resumen tipo podcast generado desde tus fuentes.</p>
          <button class="press-spring" @click=${this.audioOverview}>Generar</button>
          ${this.overviewUrl ? html`<audio controls src=${this.overviewUrl} style="width:100%;margin-top:12px"></audio>` : null}
        </m3-card-morphing>
      </aside>
    `;
  }
}

function iconOf(kind: Source["kind"]) {
  return ({
    url: "link", pdf: "picture_as_pdf", youtube: "smart_display",
    audio: "mic", image: "image", text: "description",
  } as const)[kind] ?? "draft";
}
