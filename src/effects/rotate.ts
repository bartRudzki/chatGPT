import { GlitchLayer } from '../engine/GlitchLayer'
export const rotate = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'rotate',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
