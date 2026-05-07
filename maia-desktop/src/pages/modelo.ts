import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";

interface ModelInfo {
  name: string;
  quant: string;
  ctx: number;
  multimodal: boolean;
  tps: number;
  ramMb?: number;
  vramMb?: number;
}

const VARIANTS = ["gemma-4-e4b", "gemma-4-e2b", "gemma-4-e1b"];
const QUANTS = ["F16", "Q5_K_M", "Q4_K_M", "Q3_K_M"];

@customElement("page-modelo")
export class PageModelo extends LitElement {
  @state() private info?: ModelInfo;
  @state() private temp = 0.7;
  @state() private topP = 0.95;
  @state() private ctx = 8192;

  static styles = css`
    h2 { font: var(--md-sys-typescale-headline-medium); margin: 0 0 16px 0; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    label { font: var(--md-sys-typescale-body-medium); display: block; margin: 8px 0; }
    input[type=range] { width: 100%; accent-color: var(--md-sys-color-primary); }
    .row { display: flex; justify-content: space-between; gap: 12px; }
    .chip { display: inline-block; padding: 2px 10px; border-radius: 999px;
      background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container);
      font-size: 11px; }
  `;

  connectedCallback() {
    super.connectedCallback();
    invoke<ModelInfo>("model_info").then((m) => (this.info = m));
  }

  private apply() { invoke("model_update", { temp: this.temp, topP: this.topP, ctx: this.ctx }); }

  render() {
    const m = this.info;
    return html`
      <h2>Modelo</h2>
      <div class="grid">
        <m3-card-morphing>
          <strong>Variante (familia Gemma 4)</strong>
          <m3-button-group
            style="margin-top:12px"
            .options=${VARIANTS.map((v) => ({ id: v, label: v.replace("gemma-4-", "").toUpperCase() }))}
            .selected=${m?.name ?? VARIANTS[0]}
            @change=${(e: CustomEvent) => invoke("model_load", { variant: e.detail })}
          ></m3-button-group>
          <p style="font-size:12px;opacity:.75;margin-top:8px">
            E4B obligatorio; fallback automático a E2B/E1B si no entra en RAM/VRAM.
          </p>
        </m3-card-morphing>

        <m3-card-morphing variant="tonal">
          <strong>Quantización</strong>
          <m3-button-group
            style="margin-top:12px"
            .options=${QUANTS.map((q) => ({ id: q, label: q }))}
            .selected=${m?.quant ?? "Q4_K_M"}
            @change=${(e: CustomEvent) => invoke("model_quant", { quant: e.detail })}
          ></m3-button-group>
        </m3-card-morphing>

        <m3-card-morphing>
          <strong>Inferencia</strong>
          <label>temperatura <span class="chip">${this.temp.toFixed(2)}</span>
            <input type="range" min="0" max="2" step="0.05" .value=${String(this.temp)}
              @input=${(e: any) => { this.temp = parseFloat(e.target.value); this.apply(); }} />
          </label>
          <label>top-p <span class="chip">${this.topP.toFixed(2)}</span>
            <input type="range" min="0" max="1" step="0.01" .value=${String(this.topP)}
              @input=${(e: any) => { this.topP = parseFloat(e.target.value); this.apply(); }} />
          </label>
          <label>contexto <span class="chip">${this.ctx}</span>
            <input type="range" min="2048" max="32768" step="1024" .value=${String(this.ctx)}
              @input=${(e: any) => { this.ctx = parseInt(e.target.value, 10); this.apply(); }} />
          </label>
        </m3-card-morphing>

        <m3-card-morphing variant="outlined">
          <strong>Multimodal</strong>
          <p style="font-size:13px;opacity:.85">Visión + audio nativo en Gemma 4. Las imágenes se enrutan a vision-* tras la inferencia.</p>
          <label><input type="checkbox" .checked=${m?.multimodal ?? true}
            @change=${(e: any) => invoke("model_multimodal", { enabled: e.target.checked })} /> Habilitar visión/audio</label>
        </m3-card-morphing>

        <m3-card-morphing>
          <strong>Monitor</strong>
          <div class="row" style="margin-top:8px"><span>tokens/s</span><span>${m?.tps?.toFixed(1) ?? "—"}</span></div>
          <div class="row"><span>RAM</span><span>${m?.ramMb ?? "—"} MB</span></div>
          <div class="row"><span>VRAM</span><span>${m?.vramMb ?? "—"} MB</span></div>
        </m3-card-morphing>
      </div>
    `;
  }
}
