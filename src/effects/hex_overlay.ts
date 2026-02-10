import { GlitchLayer } from '../engine/GlitchLayer'
export const hex_overlay = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'hex_overlay',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
