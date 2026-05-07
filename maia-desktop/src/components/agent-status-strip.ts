import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { subscribeAgentStream, type AgentTick } from "../services/agent-stream.ts";
import type { UnlistenFn } from "@tauri-apps/api/event";

/** Tira inferior persistente que muestra qué agentes están activos en cada turno. */
@customElement("agent-status-strip")
export class AgentStatusStrip extends LitElement {
  @state() private ticks: AgentTick[] = [];
  private unlisten?: UnlistenFn;

  static styles = css`
    :host {
      position: absolute; left: 0; right: 0; bottom: 0;
      display: flex; flex-wrap: nowrap; gap: 6px;
      padding: 8px 12px;
      background: var(--md-sys-color-surface-container-high);
      overflow-x: auto;
      font: var(--md-sys-typescale-body-medium);
    }
    .chip {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 4px 10px; border-radius: 999px;
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface-variant);
      white-space: nowrap;
    }
    .chip[data-status="running"] { background: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container); }
    .chip[data-status="done"]    { background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container); }
    .chip[data-status="error"]   { background: var(--md-sys-color-error-container);   color: var(--md-sys-color-on-error-container); }
    .dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; }
  `;

  connectedCallback() {
    super.connectedCallback();
    subscribeAgentStream((t) => {
      const next = [...this.ticks.filter((x) => x.agent !== t.agent), t];
      this.ticks = next.slice(-12);
    }).then((u) => (this.unlisten = u));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.unlisten?.();
  }

  render() {
    if (!this.ticks.length) return html`<span class="chip"><span class="dot"></span>Agentes en espera</span>`;
    return html`${this.ticks.map((t) => html`
      <span class="chip" data-status=${t.status}>
        <span class="dot"></span>${t.agent}${t.ms ? html` · ${t.ms}ms` : null}
      </span>`)}`;
  }
}
