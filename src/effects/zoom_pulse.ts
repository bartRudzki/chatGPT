import { GlitchLayer } from '../engine/GlitchLayer'
export const zoom_pulse = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'zoom_pulse',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
