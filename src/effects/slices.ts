import { GlitchLayer } from '../engine/GlitchLayer'
export const slices = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'slices',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
