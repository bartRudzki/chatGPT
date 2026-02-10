#!/usr/bin/env bash
set -e

echo "🧩 Filling missing files with full implementation…"

ensure_file () {
  if [ ! -f "$1" ]; then
    echo "➕ creating $1"
    mkdir -p "$(dirname "$1")"
    cat <<'EOF' > "$1"
$2
EOF
  else
    echo "✔ $1 exists – skipping"
  fi
}

# ---------- README ----------
ensure_file README.md "
# Glitch Lab

Matrix / UNIX terminal × Windows 3.11 glitch laboratory.

## Run
pnpm i
pnpm dev

## Tests
pnpm test
pnpm test:e2e
"

# ---------- next-env ----------
ensure_file next-env.d.ts "
/// <reference types=\"next\" />
/// <reference types=\"next/image-types/global\" />
"

# ---------- vitest ----------
ensure_file vitest.config.ts "
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
"

# ---------- playwright ----------
ensure_file playwright.config.ts "
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
})
"

# ---------- prompt generator ----------
ensure_file src/utils/promptGenerator.ts "
import { GlitchLayer } from '../engine/GlitchLayer'

export function generatePrompt(layers: GlitchLayer[], target: string) {
  return \`Apply layered glitch filters in order:
\${layers.map(l => \`- \${l.label}: \${JSON.stringify(l.params)}\`).join('\\n')}

Rules:
- preserve content
- no crop
- no resize
- keep aspect ratio
- video: temporal consistency
- no flicker unless explicitly requested
- output high quality

Target model: \${target}\`
}
"

# ---------- CRT Glass ----------
ensure_file src/three/CRTGlass.tsx "
'use client'
import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

const CRTMaterial = shaderMaterial(
  { time: 0 },
  \`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }\`,
  \`
  uniform float time;
  varying vec2 vUv;

  float scan(float y){
    return sin(y * 800.0 + time * 4.0) * 0.04;
  }

  void main(){
    vec2 uv = vUv - 0.5;
    uv *= 1.0 + dot(uv,uv) * 0.25;
    uv += 0.5;

    float glow = scan(uv.y);
    gl_FragColor = vec4(0.0,1.0,0.6,0.15 + glow);
  }\`
)

extend({ CRTMaterial })

export function CRTGlass() {
  return (
    <mesh>
      <planeGeometry args={[2,1]} />
      {/* @ts-ignore */}
      <cRTMaterial />
    </mesh>
  )
}
"

# ---------- presets ----------
ensure_file src/presets/vhsTrailer.ts "
import { rgb_split } from '../effects/rgb_split'
import { scanlines } from '../effects/scanlines'
import { snow_band } from '../effects/snow_band'

export const VHS_TRAILER = [
  rgb_split(),
  scanlines({ thickness: 2 }),
  snow_band({ bandHeight: 80, intensity: 0.6 })
]
"

ensure_file src/presets/cyberpunk.ts "
import { glow } from '../effects/glow'
import { glitch_colorwash } from '../effects/glitch_colorwash'

export const CYBERPUNK = [
  glow({ radius: 12, color: '#00ffcc' }),
  glitch_colorwash({ hueShift: 45, speed: 1.2 })
]
"

echo "✅ Missing files filled with full code."