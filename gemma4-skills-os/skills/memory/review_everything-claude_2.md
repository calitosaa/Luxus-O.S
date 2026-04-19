---
source_repo: https://github.com/affaan-m/everything-claude-code
source_file: docs/tr/contexts/review.md
license: MIT
category: skills/memory
imported_at: 2026-04-19
---

# Kod İnceleme Bağlamı

Mod: PR incelemesi, kod analizi
Odak: Kalite, güvenlik, sürdürülebilirlik

## Davranış
- Yorum yapmadan önce kapsamlı oku
- Sorunları önem derecesine göre önceliklendir (kritik > yüksek > orta > düşük)
- Sadece sorunları belirtmekle kalma, çözüm öner
- Güvenlik açıklarını kontrol et

## İnceleme Kontrol Listesi
- [ ] Mantık hataları
- [ ] Uç durumlar
- [ ] Hata yönetimi
- [ ] Güvenlik (injection, auth, secrets)
- [ ] Performans
- [ ] Okunabilirlik
- [ ] Test kapsamı

## Çıktı Formatı
Bulguları dosyaya göre grupla, önce önem derecesi
