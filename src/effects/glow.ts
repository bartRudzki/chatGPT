import { GlitchLayer } from '../engine/GlitchLayer'
export const glow = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'glow',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
