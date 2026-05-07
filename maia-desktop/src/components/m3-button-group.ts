import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("m3-button-group")
export class M3ButtonGroup extends LitElement {
  @property({ type: Array }) options: { id: string; label: string; icon?: string }[] = [];
  @property() selected = "";

  static styles = css`
    :host { display: inline-flex; gap: 4px; padding: 4px; background: var(--md-sys-color-surface-container); border-radius: 28px; }
    button {
      all: unset;
      cursor: pointer;
      padding: 10px 16px;
      border-radius: 8px;
      font: var(--md-sys-typescale-label-large-emphasized);
      color: var(--md-sys-color-on-surface-variant);
      display: inline-flex; align-items: center; gap: 6px;
      transition:
        background var(--md-sys-motion-duration-short4) var(--md-sys-motion-spring-default),
        border-radius var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default),
        color var(--md-sys-motion-duration-short3) ease;
    }
    button:hover { background: color-mix(in oklch, var(--md-sys-color-on-surface) 8%, transparent); }
    button[aria-pressed="true"] {
      background: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
      border-radius: 22px;
    }
    .icon { font-family: "Material Symbols Outlined"; font-size: 18px; }
  `;

  render() {
    return html`${this.options.map((o) => html`
      <button
        class="press-spring"
        aria-pressed=${this.selected === o.id}
        @click=${() => { this.selected = o.id; this.dispatchEvent(new CustomEvent("change", { detail: o.id })); }}
      >
        ${o.icon ? html`<span class="icon">${o.icon}</span>` : null}
        ${o.label}
      </button>`)}`;
  }
}
