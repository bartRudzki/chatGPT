import { GlitchLayer } from '../engine/GlitchLayer'
export const flicker = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'flicker',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
