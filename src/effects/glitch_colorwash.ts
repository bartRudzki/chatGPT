import { GlitchLayer } from '../engine/GlitchLayer'
export const glitch_colorwash = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'glitch_colorwash',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
