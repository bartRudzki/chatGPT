import { create } from 'zustand'
import { GlitchLayer } from '../engine/GlitchLayer'

interface State {
  layers: GlitchLayer[]
  activeId?: string
  cinematic: boolean
  addLayer: (l: GlitchLayer) => void
  toggleCinematic: () => void
}

export const useGlitchStore = create<State>((set) => ({
  layers: [],
  cinematic: false,
  addLayer: (l) => set(s => ({ layers: [...s.layers, l], activeId: l.id })),
  toggleCinematic: () => set(s => ({ cinematic: !s.cinematic })),
}))
