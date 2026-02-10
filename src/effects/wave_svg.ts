import { GlitchLayer } from '../engine/GlitchLayer'
export const wave_svg = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'wave_svg',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
