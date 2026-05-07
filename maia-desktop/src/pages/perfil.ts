import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";

@customElement("page-perfil")
export class PagePerfil extends LitElement {
  @state() private name = "";
  @state() private theme: "auto" | "light" | "dark" = "auto";
  @state() private lang: "es" | "en" = "es";
  @state() private dynamicColor = true;

  static styles = css`
    h2 { font: var(--md-sys-typescale-headline-medium); margin: 0 0 16px 0; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    label { display: block; font: var(--md-sys-typescale-body-medium); margin: 8px 0; }
    input[type=text] {
      padding: 10px 14px; border-radius: 12px; border: 0;
      background: var(--md-sys-color-surface-container-high);
      color: var(--md-sys-color-on-surface); width: 100%;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    invoke<{ name: string; theme: "auto" | "light" | "dark"; lang: "es" | "en"; dynamicColor: boolean }>("profile_get")
      .then((p) => { this.name = p.name; this.theme = p.theme; this.lang = p.lang; this.dynamicColor = p.dynamicColor; })
      .catch(() => {});
  }

  private save() {
    invoke("profile_set", { name: this.name, theme: this.theme, lang: this.lang, dynamicColor: this.dynamicColor });
  }

  render() {
    return html`
      <h2>Perfil</h2>
      <div class="grid">
        <m3-card-morphing>
          <strong>Identidad</strong>
          <label>Nombre
            <input type="text" .value=${this.name} @input=${(e: any) => { this.name = e.target.value; this.save(); }} />
          </label>
        </m3-card-morphing>

        <m3-card-morphing variant="tonal">
          <strong>Tema</strong>
          <m3-button-group
            style="margin-top:12px"
            .options=${[
              { id: "auto",  label: "Auto",   icon: "auto_awesome" },
              { id: "light", label: "Claro",  icon: "light_mode" },
              { id: "dark",  label: "Oscuro", icon: "dark_mode" },
            ]}
            .selected=${this.theme}
            @change=${(e: CustomEvent) => { this.theme = e.detail as any; this.save(); }}
          ></m3-button-group>
          <label style="margin-top:12px">
            <input type="checkbox" .checked=${this.dynamicColor}
              @change=${(e: any) => { this.dynamicColor = e.target.checked; this.save(); }} />
            Color dinámico desde wallpaper
          </label>
        </m3-card-morphing>

        <m3-card-morphing variant="outlined">
          <strong>Idioma</strong>
          <m3-button-group
            style="margin-top:12px"
            .options=${[{ id: "es", label: "Español" }, { id: "en", label: "English" }]}
            .selected=${this.lang}
            @change=${(e: CustomEvent) => { this.lang = e.detail as any; this.save(); }}
          ></m3-button-group>
        </m3-card-morphing>

        <m3-card-morphing>
          <strong>Memoria</strong>
          <p style="font-size:13px;opacity:.85">Exporta el contenido del workspace OpenClaw (~/.openclaw/workspace).</p>
          <button class="press-spring" style="all:unset;cursor:pointer;padding:8px 14px;border-radius:14px;background:var(--md-sys-color-primary-container);color:var(--md-sys-color-on-primary-container);font:var(--md-sys-typescale-label-large-emphasized)"
            @click=${() => invoke("workspace_export")}>Exportar</button>
        </m3-card-morphing>
      </div>
    `;
  }
}
