import { GlitchLayer } from '../engine/GlitchLayer'
export const invert = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'invert',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
