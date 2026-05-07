import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

interface FabAction { id: string; icon: string; label: string; }

@customElement("m3-fab-menu")
export class M3FabMenu extends LitElement {
  @property({ type: Array }) actions: FabAction[] = [];
  @state() private open = false;

  static styles = css`
    :host { position: absolute; right: 24px; bottom: 24px; }
    .fab {
      width: 56px; height: 56px;
      border-radius: 16px;
      background: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      display: grid; place-items: center;
      box-shadow: var(--md-sys-elevation-3);
      cursor: pointer; border: 0;
      transition:
        border-radius var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default),
        transform var(--md-sys-motion-duration-short4) var(--md-sys-motion-spring-default);
    }
    .fab:hover { border-radius: 24px; }
    .fab[aria-expanded="true"] { border-radius: 28px; transform: rotate(45deg); }
    .icon { font-family: "Material Symbols Outlined"; font-size: 28px; }
    .menu {
      position: absolute; right: 0; bottom: 72px;
      display: flex; flex-direction: column; gap: 12px;
      align-items: flex-end;
    }
    .item {
      display: flex; align-items: center; gap: 12px;
      animation: spring-in var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default) both;
    }
    .item button {
      width: 48px; height: 48px;
      border-radius: 14px;
      background: var(--md-sys-color-secondary-container);
      color: var(--md-sys-color-on-secondary-container);
      border: 0; cursor: pointer;
      box-shadow: var(--md-sys-elevation-2);
    }
    .item span.label {
      background: var(--md-sys-color-surface-container-high);
      color: var(--md-sys-color-on-surface);
      padding: 6px 12px; border-radius: 8px;
      font: var(--md-sys-typescale-label-large-emphasized);
    }
  `;

  render() {
    return html`
      ${this.open ? html`
        <div class="menu">
          ${this.actions.map((a) => html`
            <div class="item">
              <span class="label">${a.label}</span>
              <button @click=${() => { this.dispatchEvent(new CustomEvent("action", { detail: a.id })); this.open = false; }}>
                <span class="icon">${a.icon}</span>
              </button>
            </div>
          `)}
        </div>` : null}
      <button class="fab press-spring" aria-expanded=${this.open} @click=${() => (this.open = !this.open)}>
        <span class="icon">add</span>
      </button>
    `;
  }
}
