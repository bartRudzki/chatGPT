import { GlitchLayer } from '../engine/GlitchLayer'
export const scanlines = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'scanlines',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
