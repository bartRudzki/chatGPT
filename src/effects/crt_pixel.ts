import { GlitchLayer } from '../engine/GlitchLayer'
export const crt_pixel = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'crt_pixel',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
