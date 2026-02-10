import { GlitchLayer } from '../engine/GlitchLayer'
export const vhs_drift = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'vhs_drift',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
