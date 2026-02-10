'use client'
import { useGlitchStore } from '../store/useGlitchStore'
export function MenuBar() {
  const toggle = useGlitchStore(s => s.toggleCinematic)
  return (
    <div className="flex gap-6 p-2 border-b border-green-500">
      <span>FILE</span><span>PRESETS</span>
      <span className="cursor-pointer" onClick={toggle}>VIEW</span>
    </div>
  )
}
