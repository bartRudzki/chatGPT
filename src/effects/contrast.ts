import { GlitchLayer } from '../engine/GlitchLayer'
export const contrast = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'contrast',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
