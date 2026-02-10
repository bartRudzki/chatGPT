import { GlitchLayer } from '../engine/GlitchLayer'
export const hold_line = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'hold_line',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
