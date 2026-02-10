import { GlitchLayer } from '../engine/GlitchLayer'
export const outline = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'outline',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
