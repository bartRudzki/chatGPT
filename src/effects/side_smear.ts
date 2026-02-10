import { GlitchLayer } from '../engine/GlitchLayer'
export const side_smear = (): GlitchLayer => ({
  id: crypto.randomUUID(),
  label: 'side_smear',
  enabled: true,
  chance: 100,
  params: {},
  apply(el) {
    el.style.opacity = '0.99'
  }
})
