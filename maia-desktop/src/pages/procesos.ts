import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";

interface Proc {
  pid: number;
  channel: string;
  skill: string;
  tokens: number;
  started: number;
}

@customElement("page-procesos")
export class PageProcesos extends LitElement {
  @state() private procs: Proc[] = [];

  static styles = css`
    :host { display: block; }
    h2 { font: var(--md-sys-typescale-headline-medium); margin: 0 0 16px 0; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
    .row { display: flex; justify-content: space-between; align-items: center; }
    .meta { font: var(--md-sys-typescale-body-medium); color: var(--md-sys-color-on-surface-variant); }
    .actions { display: flex; gap: 4px; }
    button.icon-btn {
      all: unset; cursor: pointer; width: 40px; height: 40px;
      border-radius: 12px; display: grid; place-items: center;
      transition: background var(--md-sys-motion-duration-short3) var(--md-sys-motion-spring-default);
    }
    button.icon-btn:hover { background: color-mix(in oklch, var(--md-sys-color-on-surface) 8%, transparent); }
    .icon { font-family: "Material Symbols Outlined"; }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.refresh();
  }

  private async refresh() {
    this.procs = await invoke<Proc[]>("list_processes");
  }

  private async act(pid: number, kind: "pause" | "stop" | "edit" | "delete") {
    await invoke("process_action", { pid, kind });
    this.refresh();
  }

  render() {
    return html`
      <h2>Procesos</h2>
      <div class="grid">
        ${this.procs.map((p) => html`
          <m3-card-morphing>
            <div class="row">
              <strong>#${p.pid}</strong>
              <span class="meta">${this.elapsed(p.started)}</span>
            </div>
            <div class="meta">canal: ${p.channel} · skill: ${p.skill}</div>
            <div class="meta">tokens: ${p.tokens.toLocaleString("es")}</div>
            <div class="actions" style="margin-top:8px">
              <button class="icon-btn press-spring" title="Pausar"   @click=${() => this.act(p.pid, "pause")}><span class="icon">pause</span></button>
              <button class="icon-btn press-spring" title="Detener"  @click=${() => this.act(p.pid, "stop")}><span class="icon">stop</span></button>
              <button class="icon-btn press-spring" title="Modificar"@click=${() => this.act(p.pid, "edit")}><span class="icon">edit</span></button>
              <button class="icon-btn press-spring" title="Eliminar" @click=${() => this.act(p.pid, "delete")}><span class="icon">delete</span></button>
            </div>
          </m3-card-morphing>`)}
      </div>
    `;
  }

  private elapsed(ts: number) {
    const s = Math.max(0, Math.floor((Date.now() - ts) / 1000));
    if (s < 60) return `${s}s`;
    const m = Math.floor(s / 60);
    if (m < 60) return `${m}m`;
    return `${Math.floor(m / 60)}h ${m % 60}m`;
  }
}
