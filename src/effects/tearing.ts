import { GlitchLayer } from '../engine/GlitchLayer'
export const tearing = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'tearing',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
