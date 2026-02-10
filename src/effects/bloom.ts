import { GlitchLayer } from '../engine/GlitchLayer'
export const bloom = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'bloom',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
