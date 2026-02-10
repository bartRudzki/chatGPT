import { GlitchLayer } from '../engine/GlitchLayer'
export const noise = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'noise',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
