#!/usr/bin/env bash
set -e

echo "🛠 Repairing missing Glitch Lab files…"

create_if_missing () {
  local FILE="$1"
  local CONTENT="$2"

  if [ ! -f "$FILE" ]; then
    echo "➕ creating $FILE"
    mkdir -p "$(dirname "$FILE")"
    cat <<'EOF' > "$FILE"
$CONTENT
EOF
  else
    echo "✔ $FILE exists – skipping"
  fi
}

# ---------- package.json ----------
create_if_missing package.json '
{
  "name": "glitch-lab",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest",
    "test:e2e": "playwright test"
  },
  "dependencies": {
    "next": "14.1.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "zustand": "^4.5.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.88.0",
    "three": "^0.160.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "vitest": "^1.2.0",
    "@playwright/test": "^1.41.0"
  }
}
'

# ---------- tsconfig.json ----------
create_if_missing tsconfig.json '
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "strict": true,
    "noEmit": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
'

# ---------- tailwind ----------
create_if_missing tailwind.config.ts '
import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: []
} satisfies Config
'

create_if_missing postcss.config.js '
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
'

# ---------- seeded RNG ----------
create_if_missing src/engine/seededRandom.ts '
export function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = Math.sin(s) * 10000
    return s - Math.floor(s)
  }
}
'

# ---------- WebGPU types ----------
create_if_missing src/webgpu/types.ts '
export interface WebGPUGlitch {
  label: string
  // pipeline + bind groups defined per implementation
}
'

# ---------- WebGPU rgb_split ----------
create_if_missing src/webgpu/glitches/rgb_split.ts '
import { WebGPUGlitch } from "../types"

export const rgbSplitWebGPU: WebGPUGlitch = {
  label: "rgb_split"
}
'

echo ""
echo "✅ Repair complete."
echo "👉 Run ./verify_glitch_lab.sh again to confirm."