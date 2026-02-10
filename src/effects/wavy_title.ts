import { GlitchLayer } from '../engine/GlitchLayer'
export const wavy_title = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'wavy_title',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
