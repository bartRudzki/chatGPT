import { GlitchLayer } from '../engine/GlitchLayer'
export const shadow_offset = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'shadow_offset',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
