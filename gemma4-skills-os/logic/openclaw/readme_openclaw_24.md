---
source_repo: https://github.com/openclaw/openclaw
source_file: extensions/zalo/README.md
license: Apache-2.0
category: logic/openclaw
imported_at: 2026-04-19
---

# @openclaw/zalo

Zalo channel plugin for OpenClaw (Bot API).

## Install (local checkout)

```bash
openclaw plugins install ./path/to/local/zalo-plugin
```

## Install (npm)

```bash
openclaw plugins install @openclaw/zalo
```

Onboarding: select Zalo and confirm the install prompt to fetch the plugin automatically.

## Config

```json5
{
  channels: {
    zalo: {
      enabled: true,
      botToken: "12345689:abc-xyz",
      dmPolicy: "pairing",
      proxy: "http://proxy.local:8080",
    },
  },
}
```

## Webhook mode

```json5
{
  channels: {
    zalo: {
      webhookUrl: "https://example.com/zalo-webhook",
      webhookSecret: "your-secret-8-plus-chars",
      webhookPath: "/zalo-webhook",
    },
  },
}
```

If `webhookPath` is omitted, the plugin uses the webhook URL path.

Restart the gateway after config changes.
