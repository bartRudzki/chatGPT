import { GlitchLayer } from '../engine/GlitchLayer'
export const skew = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'skew',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
