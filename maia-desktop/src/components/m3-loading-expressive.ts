import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("m3-loading-expressive")
export class M3LoadingExpressive extends LitElement {
  @property() label = "";

  static styles = css`
    :host { display: inline-flex; align-items: center; gap: 8px; }
    .indicator { width: 24px; height: 24px; border-radius: 50%;
      background: conic-gradient(from 0deg, var(--md-sys-color-primary), transparent 75%);
      animation: spin 1.2s linear infinite, morph 2.4s ease-in-out infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes morph { 0%,100% { border-radius: 50%; } 50% { border-radius: 30% 70% 70% 30% / 50% 50% 50% 50%; } }
  `;

  render() { return html`<span class="indicator"></span><span>${this.label}</span>`; }
}
