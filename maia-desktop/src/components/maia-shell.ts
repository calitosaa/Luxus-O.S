import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

type Page = "oficina" | "procesos" | "skills" | "notebook" | "canales" | "modelo" | "workflows" | "perfil";

@customElement("maia-shell")
export class MaiaShell extends LitElement {
  @state() private page: Page = "oficina";

  static styles = css`
    :host {
      display: grid;
      grid-template-columns: 88px 1fr;
      height: 100vh;
      background: var(--md-sys-color-surface);
      color: var(--md-sys-color-on-surface);
    }
    main {
      overflow: hidden;
      position: relative;
      background: var(--md-sys-color-surface-container-low);
      border-radius: 24px 0 0 24px;
      margin: 8px 0 8px 0;
      box-shadow: var(--md-sys-elevation-1);
    }
    .page { position: absolute; inset: 0; padding: 24px; overflow: auto; }
    @media (max-width: 720px) {
      :host { grid-template-columns: 1fr; grid-template-rows: 1fr 80px; }
      main { border-radius: 24px 24px 0 0; margin: 8px 8px 0 8px; }
    }
  `;

  private nav = (p: Page) => { this.page = p; };

  render() {
    return html`
      <m3-nav-rail
        .active=${this.page}
        @navigate=${(e: CustomEvent) => this.nav(e.detail as Page)}
      ></m3-nav-rail>
      <main>
        <div class="page spring-enter" .key=${this.page}>${this.renderPage()}</div>
        <agent-status-strip></agent-status-strip>
      </main>
    `;
  }

  private renderPage() {
    switch (this.page) {
      case "oficina":   return html`<page-oficina></page-oficina>`;
      case "procesos":  return html`<page-procesos></page-procesos>`;
      case "skills":    return html`<page-skills-agentes></page-skills-agentes>`;
      case "notebook":  return html`<page-notebook></page-notebook>`;
      case "canales":   return html`<page-canales></page-canales>`;
      case "modelo":    return html`<page-modelo></page-modelo>`;
      case "workflows": return html`<page-workflows></page-workflows>`;
      case "perfil":    return html`<page-perfil></page-perfil>`;
    }
  }
}
