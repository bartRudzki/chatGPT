import { GlitchLayer } from '../engine/GlitchLayer'
export const ghost = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'ghost',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
