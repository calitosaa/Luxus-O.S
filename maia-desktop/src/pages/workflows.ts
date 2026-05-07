import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";

interface Flow { name: string; path: string; category: string; nodes: number; }

@customElement("page-workflows")
export class PageWorkflows extends LitElement {
  @state() private flows: Flow[] = [];
  @state() private query = "";

  static styles = css`
    h2 { font: var(--md-sys-typescale-headline-medium); margin: 0 0 16px 0; }
    .head { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; margin-bottom: 16px; }
    input.search {
      flex: 1; max-width: 520px;
      padding: 12px 16px; border-radius: 28px; border: 0;
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      font: var(--md-sys-typescale-body-large);
    }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px; }
    .meta { font-size: 12px; opacity: .75; }
    button.import {
      all: unset; cursor: pointer; padding: 8px 14px; border-radius: 14px;
      background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary);
      font: var(--md-sys-typescale-label-large-emphasized);
      transition: border-radius var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default);
    }
    button.import:hover { border-radius: 22px; }
  `;

  connectedCallback() {
    super.connectedCallback();
    invoke<Flow[]>("list_workflows", { query: this.query }).then((f) => (this.flows = f));
  }

  private async search(q: string) {
    this.query = q;
    this.flows = await invoke<Flow[]>("list_workflows", { query: q });
  }

  render() {
    return html`
      <h2>Flujos n8n</h2>
      <div class="head">
        <input class="search" placeholder="Buscar entre 2.4k flujos n8n…"
          @input=${(e: any) => this.search(e.target.value)} />
        <span class="meta">${this.flows.length} resultados</span>
      </div>
      <div class="grid">
        ${this.flows.slice(0, 60).map((f) => html`
          <m3-card-morphing>
            <strong>${f.name}</strong>
            <div class="meta">${f.category} · ${f.nodes} nodos</div>
            <button class="import press-spring" style="margin-top:8px"
              @click=${() => invoke("workflow_import", { path: f.path })}>Importar como skill</button>
          </m3-card-morphing>`)}
      </div>
    `;
  }
}
