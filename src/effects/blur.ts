import { GlitchLayer } from '../engine/GlitchLayer'
export const blur = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'blur',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
