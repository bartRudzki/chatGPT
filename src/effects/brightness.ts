import { GlitchLayer } from '../engine/GlitchLayer'
export const brightness = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'brightness',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
