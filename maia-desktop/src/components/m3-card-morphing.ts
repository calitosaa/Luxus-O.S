import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("m3-card-morphing")
export class M3CardMorphing extends LitElement {
  @property() variant: "filled" | "tonal" | "outlined" = "filled";

  static styles = css`
    :host { display: block; }
    .card {
      padding: 16px;
      background: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      border-radius: var(--md-sys-shape-corner-large);
      box-shadow: var(--md-sys-elevation-1);
      transition:
        border-radius var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default),
        transform var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default),
        box-shadow var(--md-sys-motion-duration-short4) ease;
    }
    .card:hover {
      transform: translateY(-2px);
      box-shadow: var(--md-sys-elevation-3);
      border-radius: 28px 16px 28px 16px;
    }
    :host([variant="tonal"]) .card    { background: var(--md-sys-color-secondary-container); color: var(--md-sys-color-on-secondary-container); }
    :host([variant="outlined"]) .card { background: transparent; box-shadow: none; outline: 1px solid var(--md-sys-color-outline-variant); }
  `;

  render() { return html`<div class="card"><slot></slot></div>`; }
}
