import { GlitchLayer } from '../engine/GlitchLayer'
export const gamma = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'gamma',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
