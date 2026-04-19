---
source_repo: https://github.com/iOfficeAI/AionUi
source_file: src/process/resources/skills/morph-ppt/reference/styles/dark--space-odyssey/build.sh
license: MIT
category: skills/design
imported_at: 2026-04-19
---

#!/bin/bash
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT="$SCRIPT_DIR/dark__space_odyssey.pptx"

echo "Building: dark--space-odyssey (太空探索历程)"
rm -f "$OUTPUT"
officecli create "$OUTPUT"

# Colors
BG=0A0E27
PLANET=1E3A5F
GLOW=4A5FFF
GOLD=FFD700
WHITE=FFFFFF
BLUE=4A90E2
CYAN=00D9FF
ORANGE=F5A623
RED=D84315
MARS_RED=FF5722
MARS_ORANGE=FF6B35
PURPLE=9B59B6
PURPLE_DARK=8E44AD
LIGHT_BLUE=3498DB
TEXT_GRAY=B8C5D6
TEXT_LIGHT=D0D8E5
TEXT_BRIGHT=E5EAF3

# Off-canvas position
OFFSCREEN=36cm

# ============================================
# SLIDE 1 - HERO
# ============================================
echo "Building Slide 1: Hero..."

officecli add "$OUTPUT" '/' --type slide --prop layout=blank --prop background=$BG

# Scene actors: space elements
officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=!!planet-main' \
  --prop preset=ellipse \
  --prop fill=$PLANET \
  --prop opacity=0.3 \
  --prop x=24cm --prop y=8cm --prop width=12cm --prop height=12cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=!!glow-accent' \
  --prop preset=ellipse \
  --prop fill=$GLOW \
  --prop opacity=0.08 \
  --prop x=21cm --prop y=5cm --prop width=18cm --prop height=18cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=!!star-1' \
  --prop preset=star5 \
  --prop fill=$GOLD \
  --prop opacity=0.6 \
  --prop x=5cm --prop y=3cm --prop width=0.8cm --prop height=0.8cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=!!star-2' \
  --prop preset=star5 \
  --prop fill=$WHITE \
  --prop opacity=0.5 \
  --prop x=8cm --prop y=7cm --prop width=0.6cm --prop height=0.6cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=!!star-3' \
  --prop preset=star5 \
  --prop fill=$GOLD \
  --prop opacity=0.7 \
  --prop x=28cm --prop y=4cm --prop width=0.7cm --prop height=0.7cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=!!line-orbit' \
  --prop preset=ellipse \
  --prop line=$BLUE \
  --prop lineWidth=0.15cm \
  --prop fill=none \
  --prop opacity=0.3 \
  --prop x=18cm --prop y=4cm --prop width=20cm --prop height=20cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=!!dot-small' \
  --prop preset=ellipse \
  --prop fill=$CYAN \
  --prop opacity=0.8 \
  --prop x=3cm --prop y=15cm --prop width=0.4cm --prop height=0.4cm

# Slide 1 content
officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s1-hero-title' \
  --prop text='太空探索历程' \
  --prop font=苹方-简 \
  --prop size=68 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=middle \
  --prop x=4cm --prop y=6cm --prop width=26cm --prop height=4cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s1-hero-subtitle' \
  --prop text='从地球到星辰大海的伟大征程' \
  --prop font=苹方-简 \
  --prop size=24 \
  --prop color=$TEXT_GRAY \
  --prop align=center \
  --prop valign=middle \
  --prop x=4cm --prop y=10.5cm --prop width=26cm --prop height=2cm

# Pre-create all other slide text content (off-canvas)
officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s2-statement-title' \
  --prop text='仰望星空，是人类与生俱来的本能' \
  --prop font=苹方-简 \
  --prop size=42 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=middle \
  --prop x=$OFFSCREEN --prop y=4cm --prop width=28cm --prop height=3cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s2-statement-text' \
  --prop text='从古代天文学家绘制星图，到伽利略用望远镜观测木星卫星，再到现代火箭技术的诞生，人类从未停止探索宇宙的脚步。20世纪中叶，太空时代的大门终于被推开。' \
  --prop font=苹方-简 \
  --prop size=18 \
  --prop color=$TEXT_LIGHT \
  --prop align=center \
  --prop valign=middle \
  --prop x=$OFFSCREEN --prop y=8.5cm --prop width=26cm --prop height=6cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-pillar-title' \
  --prop text='突破大气层：太空时代的黎明' \
  --prop font=苹方-简 \
  --prop size=32 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=2cm --prop width=28cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p1-year' \
  --prop text='1957' \
  --prop font=苹方-简 \
  --prop size=56 \
  --prop bold=true \
  --prop color=$GOLD \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=5.5cm --prop width=8cm --prop height=3cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p1-title' \
  --prop text='人造卫星' \
  --prop font=苹方-简 \
  --prop size=28 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=9cm --prop width=8cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p1-desc' \
  --prop text='苏联发射斯普特尼克1号，人类第一颗人造卫星进入轨道，标志着太空时代开启' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=C0CAD9 \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=11.5cm --prop width=7cm --prop height=4cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p2-year' \
  --prop text='1961' \
  --prop font=苹方-简 \
  --prop size=56 \
  --prop bold=true \
  --prop color=$GOLD \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=5.5cm --prop width=8cm --prop height=3cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p2-title' \
  --prop text='载人飞行' \
  --prop font=苹方-简 \
  --prop size=28 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=9cm --prop width=8cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p2-desc' \
  --prop text='尤里·加加林乘坐东方1号完成108分钟环绕地球飞行，成为第一个进入太空的人类' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=C0CAD9 \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=11.5cm --prop width=7cm --prop height=4cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p3-year' \
  --prop text='1965' \
  --prop font=苹方-简 \
  --prop size=56 \
  --prop bold=true \
  --prop color=$GOLD \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=5.5cm --prop width=8cm --prop height=3cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p3-title' \
  --prop text='太空行走' \
  --prop font=苹方-简 \
  --prop size=28 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=9cm --prop width=8cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s3-p3-desc' \
  --prop text='列昂诺夫完成人类首次舱外活动，在太空中漂浮12分钟' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=C0CAD9 \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=11.5cm --prop width=7cm --prop height=4cm

# Slide 4 content
officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s4-title' \
  --prop text='月球征程' \
  --prop font=苹方-简 \
  --prop size=48 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=2.5cm --prop width=20cm --prop height=3cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s4-quote' \
  --prop text='这是一个人的一小步，却是人类的一大步' \
  --prop font=苹方-简 \
  --prop size=32 \
  --prop bold=true \
  --prop color=$GOLD \
  --prop align=left \
  --prop valign=middle \
  --prop x=$OFFSCREEN --prop y=6.5cm --prop width=18cm --prop height=4cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s4-data1' \
  --prop text='1969年7月20日，阿波罗11号成功登月，38万公里的旅程' \
  --prop font=苹方-简 \
  --prop size=20 \
  --prop color=$TEXT_BRIGHT \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=11cm --prop width=18cm --prop height=3cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s4-data2' \
  --prop text='6次成功登月任务（1969-1972）' \
  --prop font=苹方-简 \
  --prop size=18 \
  --prop color=$TEXT_GRAY \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=14.5cm --prop width=18cm --prop height=2cm

# Slide 5 content
officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-title' \
  --prop text='空间站时代：在轨道上生活' \
  --prop font=苹方-简 \
  --prop size=32 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=2.5cm --prop width=28cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station1-title' \
  --prop text='和平号空间站' \
  --prop font=苹方-简 \
  --prop size=24 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=6cm --prop width=8cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station1-year' \
  --prop text='1986-2001' \
  --prop font=苹方-简 \
  --prop size=20 \
  --prop color=$CYAN \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=8.5cm --prop width=8cm --prop height=1.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station1-desc' \
  --prop text='运行15年，累计接待137名宇航员，证明人类可以在太空长期生活' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=C0CAD9 \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=10.5cm --prop width=7.5cm --prop height=4cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station2-title' \
  --prop text='国际空间站' \
  --prop font=苹方-简 \
  --prop size=24 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=6cm --prop width=8cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station2-year' \
  --prop text='1998-至今' \
  --prop font=苹方-简 \
  --prop size=20 \
  --prop color=$BLUE \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=8.5cm --prop width=8cm --prop height=1.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station2-desc' \
  --prop text='16国合作，400km轨道高度，持续有人驻守超过23年' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=C0CAD9 \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=10.5cm --prop width=7.5cm --prop height=4cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station3-title' \
  --prop text='中国空间站' \
  --prop font=苹方-简 \
  --prop size=24 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=6cm --prop width=8cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station3-year' \
  --prop text='2021-至今' \
  --prop font=苹方-简 \
  --prop size=20 \
  --prop color=5865F2 \
  --prop align=center \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=8.5cm --prop width=8cm --prop height=1.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s5-station3-desc' \
  --prop text='自主研发，T字构型，可容纳3-6名航天员长期工作' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=C0CAD9 \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=10.5cm --prop width=7.5cm --prop height=4cm

# Slide 6 content
officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s6-title' \
  --prop text='火星梦想' \
  --prop font=苹方-简 \
  --prop size=48 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=2.5cm --prop width=15cm --prop height=3cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s6-subtitle' \
  --prop text='下一个人类的家园' \
  --prop font=苹方-简 \
  --prop size=36 \
  --prop bold=true \
  --prop color=FF8A65 \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=6cm --prop width=15cm --prop height=2.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s6-section-title' \
  --prop text='探测器先行' \
  --prop font=苹方-简 \
  --prop size=22 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=9.5cm --prop width=14cm --prop height=1.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s6-point1' \
  --prop text='已有10+个火星探测器成功着陆，毅力号、祝融号正在工作' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=$TEXT_LIGHT \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=11cm --prop width=14cm --prop height=2.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s6-point2' \
  --prop text='技术突破 | SpaceX星舰可重复使用，NASA Artemis重返月球为火星铺路' \
  --prop font=苹方-简 \
  --prop size=16 \
  --prop color=$TEXT_LIGHT \
  --prop align=left \
  --prop valign=top \
  --prop x=$OFFSCREEN --prop y=13.5cm --prop width=14cm --prop height=2.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s6-timeline' \
  --prop text='2030年代' \
  --prop font=苹方-简 \
  --prop size=28 \
  --prop bold=true \
  --prop color=$GOLD \
  --prop align=right \
  --prop valign=middle \
  --prop x=$OFFSCREEN --prop y=8cm --prop width=10cm --prop height=2cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s6-timeline-text' \
  --prop text='NASA计划实现载人登陆火星' \
  --prop font=苹方-简 \
  --prop size=18 \
  --prop color=$WHITE \
  --prop align=right \
  --prop valign=middle \
  --prop x=$OFFSCREEN --prop y=10.5cm --prop width=10cm --prop height=2cm

# Slide 7 content
officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s7-title' \
  --prop text='征途未完' \
  --prop font=苹方-简 \
  --prop size=64 \
  --prop bold=true \
  --prop color=$WHITE \
  --prop align=center \
  --prop valign=middle \
  --prop x=$OFFSCREEN --prop y=5.5cm --prop width=26cm --prop height=3.5cm

officecli add "$OUTPUT" '/slide[1]' --type shape \
  --prop 'name=#s7-text' \
  --prop text='从第一颗卫星到空间站，从月球漫步到火星梦想，人类的探索永不止步。星辰大海，就在前方。' \
  --prop font=苹方-简 \
  --prop size=20 \
  --prop color=$TEXT_GRAY \
  --prop align=center \
  --prop valign=middle \
  --prop x=$OFFSCREEN --prop y=10cm --prop width=26cm --prop height=5cm

# ============================================
# SLIDE 2 - STATEMENT
# ============================================
echo "Building Slide 2: Statement..."

officecli add "$OUTPUT" '/' --from '/slide[1]'
officecli set "$OUTPUT" '/slide[2]' --prop transition=morph

# Morph scene actors
officecli set "$OUTPUT" '/slide[2]/shape[1]' --prop x=2cm --prop y=2cm --prop width=8cm --prop height=8cm
officecli set "$OUTPUT" '/slide[2]/shape[2]' --prop x=0cm --prop y=0cm --prop width=15cm --prop height=15cm --prop opacity=0.1
officecli set "$OUTPUT" '/slide[2]/shape[3]' --prop x=26cm --prop y=5cm
officecli set "$OUTPUT" '/slide[2]/shape[4]' --prop x=29cm --prop y=14cm
officecli set "$OUTPUT" '/slide[2]/shape[5]' --prop x=10cm --prop y=2cm
officecli set "$OUTPUT" '/slide[2]/shape[6]' --prop x=$OFFSCREEN --prop y=0cm
officecli set "$OUTPUT" '/slide[2]/shape[7]' --prop x=28cm --prop y=17cm

# Hide slide 1 content, show slide 2 content
officecli set "$OUTPUT" '/slide[2]/shape[8]' --prop x=$OFFSCREEN --prop y=0cm
officecli set "$OUTPUT" '/slide[2]/shape[9]' --prop x=$OFFSCREEN --prop y=5cm
officecli set "$OUTPUT" '/slide[2]/shape[10]' --prop x=3cm --prop y=4cm
officecli set "$OUTPUT" '/slide[2]/shape[11]' --prop x=4cm --prop y=8.5cm

# ============================================
# SLIDE 3 - PILLARS
# ============================================
echo "Building Slide 3: Pillars..."

officecli add "$OUTPUT" '/' --from '/slide[1]'
officecli set "$OUTPUT" '/slide[3]' --prop transition=morph

# Morph scene actors - create card backgrounds
officecli set "$OUTPUT" '/slide[3]/shape[1]' --prop preset=roundRect --prop fill=2A4A6F --prop opacity=0.12 --prop width=8cm --prop height=11cm --prop x=2.5cm --prop y=5cm
officecli set "$OUTPUT" '/slide[3]/shape[2]' --prop preset=roundRect --prop fill=2A4A6F --prop opacity=0.12 --prop width=8cm --prop height=11cm --prop x=13cm --prop y=5cm
officecli set "$OUTPUT" '/slide[3]/shape[3]' --prop x=24cm --prop y=12cm --prop width=0.6cm --prop height=0.6cm
officecli set "$OUTPUT" '/slide[3]/shape[4]' --prop x=18cm --prop y=3cm --prop width=0.5cm --prop height=0.5cm
officecli set "$OUTPUT" '/slide[3]/shape[5]' --prop x=30cm --prop y=8cm --prop width=0.7cm --prop height=0.7cm
officecli set "$OUTPUT" '/slide[3]/shape[6]' --prop x=$OFFSCREEN --prop y=5cm
officecli set "$OUTPUT" '/slide[3]/shape[7]' --prop preset=roundRect --prop fill=2A4A6F --prop opacity=0.12 --prop width=8cm --prop height=11cm --prop x=23.5cm --prop y=5cm

# Hide previous content, show slide 3 content
officecli set "$OUTPUT" '/slide[3]/shape[8]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[3]/shape[9]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[3]/shape[10]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[3]/shape[11]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[3]/shape[12]' --prop x=2.5cm --prop y=2cm
officecli set "$OUTPUT" '/slide[3]/shape[13]' --prop x=2.5cm --prop y=5.5cm
officecli set "$OUTPUT" '/slide[3]/shape[14]' --prop x=2.5cm --prop y=9cm
officecli set "$OUTPUT" '/slide[3]/shape[15]' --prop x=3cm --prop y=11.5cm
officecli set "$OUTPUT" '/slide[3]/shape[16]' --prop x=13cm --prop y=5.5cm
officecli set "$OUTPUT" '/slide[3]/shape[17]' --prop x=13cm --prop y=9cm
officecli set "$OUTPUT" '/slide[3]/shape[18]' --prop x=13.5cm --prop y=11.5cm
officecli set "$OUTPUT" '/slide[3]/shape[19]' --prop x=23.5cm --prop y=5.5cm
officecli set "$OUTPUT" '/slide[3]/shape[20]' --prop x=23.5cm --prop y=9cm
officecli set "$OUTPUT" '/slide[3]/shape[21]' --prop x=24cm --prop y=11.5cm

# ============================================
# SLIDE 4 - SHOWCASE
# ============================================
echo "Building Slide 4: Showcase..."

officecli add "$OUTPUT" '/' --from '/slide[1]'
officecli set "$OUTPUT" '/slide[4]' --prop transition=morph

# Morph scene actors - moon theme
officecli set "$OUTPUT" '/slide[4]/shape[1]' --prop preset=ellipse --prop fill=$ORANGE --prop opacity=0.15 --prop width=14cm --prop height=14cm --prop x=20cm --prop y=6cm
officecli set "$OUTPUT" '/slide[4]/shape[2]' --prop preset=ellipse --prop fill=$GOLD --prop opacity=0.05 --prop width=10cm --prop height=10cm --prop x=23cm --prop y=8cm
officecli set "$OUTPUT" '/slide[4]/shape[3]' --prop x=2cm --prop y=15cm
officecli set "$OUTPUT" '/slide[4]/shape[4]' --prop x=31cm --prop y=3cm
officecli set "$OUTPUT" '/slide[4]/shape[5]' --prop x=5cm --prop y=4cm
officecli set "$OUTPUT" '/slide[4]/shape[6]' --prop x=$OFFSCREEN --prop y=10cm
officecli set "$OUTPUT" '/slide[4]/shape[7]' --prop preset=ellipse --prop fill=$ORANGE --prop opacity=0.4 --prop width=1.2cm --prop height=1.2cm --prop x=2cm --prop y=2cm

# Hide previous content, show slide 4 content
officecli set "$OUTPUT" '/slide[4]/shape[8]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[9]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[10]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[11]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[12]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[13]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[14]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[15]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[16]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[17]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[18]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[19]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[20]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[21]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[4]/shape[22]' --prop x=2.5cm --prop y=2.5cm
officecli set "$OUTPUT" '/slide[4]/shape[23]' --prop x=2.5cm --prop y=6.5cm
officecli set "$OUTPUT" '/slide[4]/shape[24]' --prop x=2.5cm --prop y=11cm
officecli set "$OUTPUT" '/slide[4]/shape[25]' --prop x=2.5cm --prop y=14.5cm

# ============================================
# SLIDE 5 - PILLARS (SPACE STATIONS)
# ============================================
echo "Building Slide 5: Space Stations..."

officecli add "$OUTPUT" '/' --from '/slide[1]'
officecli set "$OUTPUT" '/slide[5]' --prop transition=morph

# Morph scene actors - station cards
officecli set "$OUTPUT" '/slide[5]/shape[1]' --prop preset=rect --prop fill=$CYAN --prop opacity=0.08 --prop width=9cm --prop height=10cm --prop x=2cm --prop y=5.5cm
officecli set "$OUTPUT" '/slide[5]/shape[2]' --prop preset=rect --prop fill=$BLUE --prop opacity=0.08 --prop width=9cm --prop height=10cm --prop x=12.5cm --prop y=5.5cm
officecli set "$OUTPUT" '/slide[5]/shape[3]' --prop x=6cm --prop y=3cm
officecli set "$OUTPUT" '/slide[5]/shape[4]' --prop x=15cm --prop y=17cm
officecli set "$OUTPUT" '/slide[5]/shape[5]' --prop x=25cm --prop y=5cm
officecli set "$OUTPUT" '/slide[5]/shape[6]' --prop preset=ellipse --prop fill=$CYAN --prop opacity=0.08 --prop line=none --prop width=8cm --prop height=8cm --prop x=14cm --prop y=6cm
officecli set "$OUTPUT" '/slide[5]/shape[7]' --prop preset=rect --prop fill=5865F2 --prop opacity=0.08 --prop width=9cm --prop height=10cm --prop x=23cm --prop y=5.5cm

# Hide previous content, show slide 5 content
officecli set "$OUTPUT" '/slide[5]/shape[8]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[9]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[10]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[11]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[12]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[13]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[14]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[15]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[16]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[17]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[18]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[19]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[20]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[21]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[22]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[23]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[24]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[25]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[5]/shape[26]' --prop x=2cm --prop y=2.5cm
officecli set "$OUTPUT" '/slide[5]/shape[27]' --prop x=2.5cm --prop y=6cm
officecli set "$OUTPUT" '/slide[5]/shape[28]' --prop x=2.5cm --prop y=8.5cm
officecli set "$OUTPUT" '/slide[5]/shape[29]' --prop x=2.8cm --prop y=10.5cm
officecli set "$OUTPUT" '/slide[5]/shape[30]' --prop x=13cm --prop y=6cm
officecli set "$OUTPUT" '/slide[5]/shape[31]' --prop x=13cm --prop y=8.5cm
officecli set "$OUTPUT" '/slide[5]/shape[32]' --prop x=13.3cm --prop y=10.5cm
officecli set "$OUTPUT" '/slide[5]/shape[33]' --prop x=23.5cm --prop y=6cm
officecli set "$OUTPUT" '/slide[5]/shape[34]' --prop x=23.5cm --prop y=8.5cm
officecli set "$OUTPUT" '/slide[5]/shape[35]' --prop x=23.8cm --prop y=10.5cm

# ============================================
# SLIDE 6 - EVIDENCE (MARS)
# ============================================
echo "Building Slide 6: Mars Dream..."

officecli add "$OUTPUT" '/' --from '/slide[1]'
officecli set "$OUTPUT" '/slide[6]' --prop transition=morph

# Morph scene actors - Mars theme
officecli set "$OUTPUT" '/slide[6]/shape[1]' --prop preset=ellipse --prop fill=$RED --prop opacity=0.5 --prop width=18cm --prop height=18cm --prop x=18cm --prop y=2cm
officecli set "$OUTPUT" '/slide[6]/shape[2]' --prop preset=ellipse --prop fill=$MARS_RED --prop opacity=0.2 --prop width=12cm --prop height=12cm --prop x=21cm --prop y=5cm
officecli set "$OUTPUT" '/slide[6]/shape[3]' --prop fill=FFB74D --prop x=4cm --prop y=3cm --prop width=0.5cm --prop height=0.5cm
officecli set "$OUTPUT" '/slide[6]/shape[4]' --prop fill=$WHITE --prop x=8cm --prop y=16cm --prop width=0.4cm --prop height=0.4cm
officecli set "$OUTPUT" '/slide[6]/shape[5]' --prop fill=FF6B35 --prop x=12cm --prop y=2cm --prop width=0.6cm --prop height=0.6cm
officecli set "$OUTPUT" '/slide[6]/shape[6]' --prop x=$OFFSCREEN --prop y=10cm
officecli set "$OUTPUT" '/slide[6]/shape[7]' --prop preset=ellipse --prop fill=$MARS_ORANGE --prop opacity=0.15 --prop width=3cm --prop height=3cm --prop x=2cm --prop y=15cm

# Hide all previous content, show slide 6 content
officecli set "$OUTPUT" '/slide[6]/shape[8]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[9]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[10]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[11]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[12]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[13]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[14]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[15]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[16]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[17]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[18]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[19]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[20]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[21]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[22]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[23]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[24]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[25]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[26]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[27]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[28]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[29]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[30]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[31]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[32]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[33]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[34]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[35]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[6]/shape[36]' --prop x=2cm --prop y=2.5cm
officecli set "$OUTPUT" '/slide[6]/shape[37]' --prop x=2cm --prop y=6cm
officecli set "$OUTPUT" '/slide[6]/shape[38]' --prop x=2cm --prop y=9.5cm
officecli set "$OUTPUT" '/slide[6]/shape[39]' --prop x=2cm --prop y=11cm
officecli set "$OUTPUT" '/slide[6]/shape[40]' --prop x=2cm --prop y=13.5cm
officecli set "$OUTPUT" '/slide[6]/shape[41]' --prop x=21cm --prop y=8cm
officecli set "$OUTPUT" '/slide[6]/shape[42]' --prop x=21cm --prop y=10.5cm

# ============================================
# SLIDE 7 - CTA
# ============================================
echo "Building Slide 7: CTA..."

officecli add "$OUTPUT" '/' --from '/slide[1]'
officecli set "$OUTPUT" '/slide[7]' --prop transition=morph

# Morph scene actors - journey continues
officecli set "$OUTPUT" '/slide[7]/shape[1]' --prop preset=ellipse --prop fill=$PLANET --prop opacity=0.2 --prop width=16cm --prop height=16cm --prop x=10cm --prop y=3cm
officecli set "$OUTPUT" '/slide[7]/shape[2]' --prop preset=ellipse --prop fill=$PURPLE --prop opacity=0.12 --prop width=20cm --prop height=20cm --prop x=8cm --prop y=1cm
officecli set "$OUTPUT" '/slide[7]/shape[3]' --prop x=30cm --prop y=2cm --prop width=0.9cm --prop height=0.9cm
officecli set "$OUTPUT" '/slide[7]/shape[4]' --prop x=3cm --prop y=5cm --prop width=0.7cm --prop height=0.7cm
officecli set "$OUTPUT" '/slide[7]/shape[5]' --prop x=26cm --prop y=16cm --prop width=0.8cm --prop height=0.8cm
officecli set "$OUTPUT" '/slide[7]/shape[6]' --prop preset=ellipse --prop fill=$PURPLE_DARK --prop opacity=0.08 --prop line=none --prop width=24cm --prop height=24cm --prop x=6cm --prop y=0cm
officecli set "$OUTPUT" '/slide[7]/shape[7]' --prop preset=ellipse --prop fill=$LIGHT_BLUE --prop opacity=0.7 --prop width=0.5cm --prop height=0.5cm --prop x=16cm --prop y=9cm

# Hide all content except final message
officecli set "$OUTPUT" '/slide[7]/shape[8]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[9]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[10]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[11]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[12]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[13]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[14]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[15]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[16]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[17]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[18]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[19]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[20]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[21]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[22]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[23]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[24]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[25]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[26]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[27]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[28]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[29]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[30]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[31]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[32]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[33]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[34]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[35]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[36]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[37]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[38]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[39]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[40]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[41]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[42]' --prop x=$OFFSCREEN
officecli set "$OUTPUT" '/slide[7]/shape[43]' --prop x=4cm --prop y=5.5cm
officecli set "$OUTPUT" '/slide[7]/shape[44]' --prop x=4cm --prop y=10cm

# ============================================
# VALIDATE & COMPLETE
# ============================================
echo "Validating..."
python3 "$(dirname "$0")/../../morph-helpers.py" final-check "$OUTPUT"

echo "✅ Build complete: $OUTPUT"
