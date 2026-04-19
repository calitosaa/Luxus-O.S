---
source_repo: https://github.com/ruvnet/ruflo
source_file: ruflo/src/ruvocal/chart/templates/_helpers.tpl
license: MIT
category: skills/voice
imported_at: 2026-04-19
---

{{- define "name" -}}
{{- default $.Release.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "app.name" -}}
chat-ui
{{- end -}}

{{- define "labels.standard" -}}
release: {{ $.Release.Name | quote }}
heritage: {{ $.Release.Service | quote }}
chart: "{{ include "name" . }}"
app: "{{ include "app.name" . }}"
{{- end -}}

{{- define "labels.resolver" -}}
release: {{ $.Release.Name | quote }}
heritage: {{ $.Release.Service | quote }}
chart: "{{ include "name" . }}"
app: "{{ include "app.name" . }}-resolver"
{{- end -}}

