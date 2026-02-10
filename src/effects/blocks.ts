import { GlitchLayer } from '../engine/GlitchLayer'
export const blocks = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'blocks',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
