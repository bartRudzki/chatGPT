#!/usr/bin/env bash
set -e

echo "🔎 Verifying Glitch Lab repository integrity"
echo "==========================================="
echo ""

MISSING=0
EMPTY=0

check_dir () {
  if [ -d "$1" ]; then
    echo "📁 OK   $1"
  else
    echo "❌ DIR  $1 (missing)"
    MISSING=$((MISSING+1))
  fi
}

check_file () {
  if [ -f "$1" ]; then
    if [ ! -s "$1" ]; then
      echo "⚠ FILE $1 (empty)"
      EMPTY=$((EMPTY+1))
    else
      echo "✔ FILE $1"
    fi
  else
    echo "❌ FILE $1 (missing)"
    MISSING=$((MISSING+1))
  fi
}

echo "📦 Checking root files"
check_file package.json
check_file tsconfig.json
check_file tailwind.config.ts
check_file postcss.config.js
check_file next-env.d.ts
check_file README.md
check_file playwright.config.ts
check_file vitest.config.ts

echo ""
echo "📁 Checking app/"
check_dir app
check_file app/layout.tsx
check_file app/page.tsx
check_file app/globals.css

echo ""
echo "📁 Checking src/engine"
check_dir src/engine
check_file src/engine/Stage.tsx
check_file src/engine/GlitchLayer.ts
check_file src/engine/chance.ts
check_file src/engine/seededRandom.ts

echo ""
echo "📁 Checking src/store"
check_dir src/store
check_file src/store/useGlitchStore.ts

echo ""
echo "📁 Checking src/ui"
check_dir src/ui
check_file src/ui/index.ts
check_file src/ui/types.ts
check_file src/ui/AsciiPanel.tsx
check_file src/ui/MenuBar.tsx
check_file src/ui/LayerManager.tsx
check_file src/ui/PropertiesPanel.tsx
check_file src/ui/PromptPanel.tsx
check_file src/ui/QAPanel.tsx

echo ""
echo "📁 Checking src/utils"
check_dir src/utils
check_file src/utils/promptGenerator.ts

echo ""
echo "📁 Checking src/three"
check_dir src/three
check_file src/three/CRTGlass.tsx

echo ""
echo "📁 Checking presets"
check_dir src/presets
check_file src/presets/vhsTrailer.ts
check_file src/presets/cyberpunk.ts

echo ""
echo "📁 Checking effects (35 expected)"
check_dir src/effects

EFFECTS=(
rgb_split blur bloom shake scanlines flicker hold_line vhs_drift
hue invert contrast saturate brightness gamma noise blocks tearing
slices outline glow ghost shadow_offset skew rotate zoom_pulse
vignette interlace posterize glitch_colorwash wave_svg side_smear
crt_pixel wavy_title snow_band hex_overlay
)

for e in "${EFFECTS[@]}"; do
  check_file "src/effects/$e.ts"
done

echo ""
echo "📁 Checking WebGPU"
check_dir src/webgpu
check_file src/webgpu/init.ts
check_file src/webgpu/support.ts
check_file src/webgpu/types.ts
check_file src/webgpu/shaders/common.wgsl
check_file src/webgpu/glitches/index.ts

GPU_GLITCHES=(
rgb_split blur bloom shake scanlines flicker vhs_drift hue invert
contrast saturate brightness gamma noise blocks tearing slices
outline glow ghost shadow_offset skew rotate zoom_pulse vignette
interlace posterize glitch_colorwash wave side_smear crt_pixel
snow_band hex_overlay
)

for g in "${GPU_GLITCHES[@]}"; do
  check_file "src/webgpu/glitches/$g.ts"
done

echo ""
echo "==========================================="
echo "Verification finished."
echo "❌ Missing files: $MISSING"
echo "⚠ Empty files:   $EMPTY"

if [ "$MISSING" -eq 0 ] && [ "$EMPTY" -eq 0 ]; then
  echo "✅ Repository matches specification."
else
  echo "🚨 Repository does NOT fully match specification."
fi