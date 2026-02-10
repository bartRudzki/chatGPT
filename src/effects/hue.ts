import { GlitchLayer } from '../engine/GlitchLayer'
export const hue = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'hue',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
