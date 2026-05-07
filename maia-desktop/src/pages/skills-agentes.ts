import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";
import { searchSkills, type SkillHit } from "../services/rag-client.ts";

interface Skill { name: string; category: string; enabled: boolean; }
interface Agent { name: string; category: string; alwaysOn: boolean; }

@customElement("page-skills-agentes")
export class PageSkillsAgentes extends LitElement {
  @state() private tab: "skills" | "agents" = "skills";
  @state() private skills: Skill[] = [];
  @state() private agents: Agent[] = [];
  @state() private query = "";
  @state() private hits: SkillHit[] = [];

  static styles = css`
    :host { display: block; }
    .head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; gap: 12px; flex-wrap: wrap; }
    h2 { font: var(--md-sys-typescale-headline-medium); margin: 0; }
    .search {
      flex: 1; max-width: 480px;
      padding: 12px 16px; border-radius: 28px;
      background: var(--md-sys-color-surface-container);
      border: 0; color: var(--md-sys-color-on-surface);
      font: var(--md-sys-typescale-body-large);
    }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
    .chip { display: inline-block; padding: 2px 10px; border-radius: 999px;
      background: var(--md-sys-color-tertiary-container); color: var(--md-sys-color-on-tertiary-container);
      font: var(--md-sys-typescale-label-large-emphasized); font-size: 11px; }
    .always-on { color: var(--md-sys-color-primary); }
    .row { display: flex; align-items: center; gap: 8px; justify-content: space-between; }
  `;

  connectedCallback() {
    super.connectedCallback();
    invoke<Skill[]>("list_skills").then((s) => (this.skills = s));
    invoke<Agent[]>("list_agents").then((a) => (this.agents = a));
  }

  private async runSearch(q: string) {
    this.query = q;
    if (!q.trim()) { this.hits = []; return; }
    this.hits = await searchSkills(q);
  }

  render() {
    return html`
      <div class="head">
        <h2>Skills & Agentes</h2>
        <m3-button-group
          .options=${[
            { id: "skills", label: "Skills (RAG)", icon: "extension" },
            { id: "agents", label: "Agentes (siempre on)", icon: "smart_toy" },
          ]}
          .selected=${this.tab}
          @change=${(e: CustomEvent) => (this.tab = e.detail as any)}
        ></m3-button-group>
      </div>

      ${this.tab === "skills" ? html`
        <input class="search" placeholder="Probar búsqueda RAG (ej: 'ocr de un recibo')…"
          @input=${(e: any) => this.runSearch(e.target.value)} />
        ${this.hits.length ? html`
          <div class="grid" style="margin-top:12px">
            ${this.hits.map((h) => html`
              <m3-card-morphing variant="tonal">
                <div class="row"><strong>${h.name}</strong><span class="chip">${h.category}</span></div>
                <div style="font:var(--md-sys-typescale-body-medium); color:var(--md-sys-color-on-surface-variant); margin-top:6px">${h.excerpt}</div>
                <div style="font-size:11px; opacity:.7; margin-top:6px">score ${h.score.toFixed(3)}</div>
              </m3-card-morphing>`)}
          </div>` : null}

        <h3 style="margin-top:24px">Catálogo</h3>
        <div class="grid">
          ${this.skills.map((s) => html`
            <m3-card-morphing>
              <div class="row"><strong>${s.name}</strong><span class="chip">${s.category}</span></div>
              <div class="row" style="margin-top:8px">
                <span style="font-size:12px; opacity:.7">${s.enabled ? "habilitada" : "deshabilitada"}</span>
                <label class="press-spring">
                  <input type="checkbox" .checked=${s.enabled}
                    @change=${(e: any) => invoke("toggle_skill", { name: s.name, enabled: e.target.checked })} />
                </label>
              </div>
            </m3-card-morphing>`)}
        </div>
      ` : html`
        <div class="grid">
          ${this.agents.map((a) => html`
            <m3-card-morphing variant="outlined">
              <div class="row"><strong>${a.name}</strong><span class="chip">${a.category}</span></div>
              ${a.alwaysOn ? html`<div class="always-on" style="margin-top:6px">⚡ siempre activo</div>` : null}
            </m3-card-morphing>`)}
        </div>
      `}
    `;
  }
}
