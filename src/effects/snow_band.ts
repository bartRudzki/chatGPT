import { GlitchLayer } from '../engine/GlitchLayer'
export const snow_band = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'snow_band',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
