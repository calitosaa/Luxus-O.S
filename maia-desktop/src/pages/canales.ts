import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import { invoke } from "../services/ipc.ts";

interface Channel { id: string; connected: boolean; messages: number; lastError?: string; }

const SUPPORTED = [
  "whatsapp","telegram","discord","slack","signal","imessage","matrix",
  "msteams","googlechat","feishu","line","mattermost","nostr","twitch",
  "wechat","qqbot","webchat","zalo","irc","synology-chat","nextcloud-talk",
];

@customElement("page-canales")
export class PageCanales extends LitElement {
  @state() private channels: Record<string, Channel> = {};

  static styles = css`
    h2 { font: var(--md-sys-typescale-headline-medium); margin: 0 0 16px 0; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 12px; }
    .row { display: flex; justify-content: space-between; align-items: center; }
    .meta { font-size: 12px; opacity: .75; }
    button {
      all: unset; cursor: pointer; padding: 8px 14px; border-radius: 14px;
      background: var(--md-sys-color-primary-container); color: var(--md-sys-color-on-primary-container);
      font: var(--md-sys-typescale-label-large-emphasized);
      transition: border-radius var(--md-sys-motion-duration-medium2) var(--md-sys-motion-spring-default);
    }
    button:hover { border-radius: 22px; }
  `;

  connectedCallback() {
    super.connectedCallback();
    invoke<Channel[]>("list_channels").then((c) => {
      const map: Record<string, Channel> = {};
      for (const id of SUPPORTED) map[id] = { id, connected: false, messages: 0 };
      for (const ch of c) map[ch.id] = ch;
      this.channels = map;
    });
  }

  private async toggle(id: string) {
    const ch = this.channels[id];
    await invoke("channel_toggle", { id, connected: !ch.connected });
    this.channels = { ...this.channels, [id]: { ...ch, connected: !ch.connected } };
  }

  render() {
    return html`
      <h2>Canales</h2>
      <div class="grid">
        ${SUPPORTED.map((id) => {
          const ch = this.channels[id] ?? { id, connected: false, messages: 0 };
          return html`
            <m3-card-morphing variant=${ch.connected ? "tonal" : "outlined"}>
              <div class="row">
                <strong>${id}</strong>
                ${ch.connected ? html`<span class="meta">activo</span>` : html`<span class="meta">desconectado</span>`}
              </div>
              <div class="meta">${ch.messages.toLocaleString("es")} mensajes</div>
              ${ch.lastError ? html`<div class="meta" style="color:var(--md-sys-color-error)">${ch.lastError}</div>` : null}
              <div style="margin-top:10px">
                <button class="press-spring" @click=${() => this.toggle(id)}>
                  ${ch.connected ? "Desconectar" : "Conectar"}
                </button>
              </div>
            </m3-card-morphing>`;
        })}
      </div>
    `;
  }
}
