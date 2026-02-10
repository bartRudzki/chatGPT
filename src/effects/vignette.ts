import { GlitchLayer } from '../engine/GlitchLayer'
export const vignette = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'vignette',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
