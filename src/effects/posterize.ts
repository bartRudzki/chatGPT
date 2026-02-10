import { GlitchLayer } from '../engine/GlitchLayer'
export const posterize = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'posterize',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
