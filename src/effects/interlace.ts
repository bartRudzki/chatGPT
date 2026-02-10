import { GlitchLayer } from '../engine/GlitchLayer'
export const interlace = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'interlace',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
