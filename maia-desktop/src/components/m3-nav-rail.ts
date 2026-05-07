import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const ITEMS = [
  { id: "oficina",   icon: "domain",         label: "Oficina"   },
  { id: "procesos",  icon: "memory",         label: "Procesos"  },
  { id: "skills",    icon: "extension",      label: "Skills"    },
  { id: "notebook",  icon: "auto_stories",   label: "Notebook"  },
  { id: "canales",   icon: "forum",          label: "Canales"   },
  { id: "modelo",    icon: "neurology",      label: "Modelo"    },
  { id: "workflows", icon: "account_tree",   label: "Flujos"    },
  { id: "perfil",    icon: "person",         label: "Perfil"    },
];

@customElement("m3-nav-rail")
export class M3NavRail extends LitElement {
  @property() active = "oficina";

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      padding: 12px 0;
      background: var(--md-sys-color-surface);
    }
    .logo {
      width: 56px; height: 56px;
      border-radius: 16px;
      display: grid; place-items: center;
      background: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      font: var(--md-sys-typescale-title-large);
      margin-bottom: 16px;
    }
    button.item {
      all: unset;
      cursor: pointer;
      width: 64px;
      padding: 8px 0;
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      color: var(--md-sys-color-on-surface-variant);
      transition: color var(--md-sys-motion-duration-short3) var(--md-sys-motion-spring-default);
    }
    button.item .pill {
      width: 56px; height: 32px;
      border-radius: 16px;
      display: grid; place-items: center;
      transition:
        background var(--md-sys-motion-duration-short4) var(--md-sys-motion-spring-default),
        border-radius var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default),
        width var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default);
    }
    button.item:hover .pill {
      background: color-mix(in oklch, var(--md-sys-color-on-surface) 8%, transparent);
    }
    button.item[aria-selected="true"] {
      color: var(--md-sys-color-on-secondary-container);
    }
    button.item[aria-selected="true"] .pill {
      background: var(--md-sys-color-secondary-container);
      border-radius: 14px 22px 14px 22px;
    }
    .label {
      font: var(--md-sys-typescale-label-large-emphasized);
      font-size: 11px; line-height: 14px;
    }
    .icon { font-family: "Material Symbols Outlined"; font-size: 24px; }
  `;

  render() {
    return html`
      <div class="logo" aria-label="MAIA">M</div>
      ${ITEMS.map((it) => html`
        <button
          class="item press-spring"
          aria-selected=${this.active === it.id}
          @click=${() => this.dispatchEvent(new CustomEvent("navigate", { detail: it.id, bubbles: true, composed: true }))}
        >
          <span class="pill"><span class="icon">${it.icon}</span></span>
          <span class="label">${it.label}</span>
        </button>
      `)}
    `;
  }
}
