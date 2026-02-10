import { GlitchLayer } from '../engine/GlitchLayer'
export const saturate = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'saturate',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
