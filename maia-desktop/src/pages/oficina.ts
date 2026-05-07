import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";

/**
 * "La Oficina" — Canvas A2UI de OpenClaw embebido + sesión activa.
 * Esta vista debe permanecer fiel al workspace OpenClaw original;
 * el iframe apunta al Canvas server que arranca el daemon openclaw
 * (configurable en config/canvas.host.port).
 */
@customElement("page-oficina")
export class PageOficina extends LitElement {
  @state() private canvasUrl = "http://127.0.0.1:7666";
  @state() private channels: { id: string; connected: boolean; messages: number }[] = [];
  @state() private activeSkills: string[] = [];

  static styles = css`
    :host { display: grid; grid-template-columns: 240px 1fr 280px; gap: 16px; height: calc(100vh - 96px); }
    aside { display: flex; flex-direction: column; gap: 12px; overflow: auto; }
    .section-title { font: var(--md-sys-typescale-title-medium); margin: 4px 0 8px 0; color: var(--md-sys-color-on-surface-variant); }
    .channel { display: flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 12px; }
    .channel .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--md-sys-color-outline); }
    .channel[data-on="true"] .dot { background: var(--md-sys-color-primary); }
    .canvas {
      grid-column: 2;
      background: var(--md-sys-color-surface-container);
      border-radius: var(--md-sys-shape-corner-extra-large);
      overflow: hidden;
      position: relative;
      box-shadow: var(--md-sys-elevation-2);
    }
    iframe { width: 100%; height: 100%; border: 0; background: var(--md-sys-color-surface-container); }
    .empty {
      position: absolute; inset: 0; display: grid; place-items: center;
      color: var(--md-sys-color-on-surface-variant);
      text-align: center; padding: 24px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    invoke<typeof this.channels>("list_channels").then((c) => (this.channels = c));
    invoke<{ skills: string[] }>("active_skills").then((r) => (this.activeSkills = r.skills ?? []));
  }

  render() {
    return html`
      <aside>
        <div class="section-title">Canales</div>
        ${this.channels.map((c) => html`
          <m3-card-morphing variant="tonal">
            <div class="channel" data-on=${c.connected}>
              <span class="dot"></span>
              <span>${c.id}</span>
              <span style="margin-left:auto">${c.messages}</span>
            </div>
          </m3-card-morphing>
        `)}
      </aside>

      <div class="canvas">
        <iframe src=${this.canvasUrl} title="Canvas OpenClaw"></iframe>
        <div class="empty" hidden>
          Esperando al Canvas A2UI…
        </div>
      </div>

      <aside>
        <div class="section-title">Skills activas</div>
        ${this.activeSkills.length === 0
          ? html`<m3-loading-expressive label="Esperando turno…"></m3-loading-expressive>`
          : this.activeSkills.map((s) => html`
              <m3-card-morphing variant="outlined">
                <div style="font:var(--md-sys-typescale-body-medium)">${s}</div>
              </m3-card-morphing>`)}
      </aside>

      <m3-fab-menu
        .actions=${[
          { id: "session", icon: "chat",          label: "Nueva sesión" },
          { id: "skill",   icon: "extension",     label: "Cargar skill" },
          { id: "flow",    icon: "account_tree",  label: "Importar flujo" },
        ]}
      ></m3-fab-menu>
    `;
  }
}
