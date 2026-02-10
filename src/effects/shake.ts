import { GlitchLayer } from '../engine/GlitchLayer'
export const shake = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'shake',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
