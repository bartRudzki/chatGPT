'use client'
import { useEffect, useRef } from 'react'
import { useGlitchStore } from '../store/useGlitchStore'
import { chanceGate } from './chance'

export function Stage({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const layers = useGlitchStore(s => s.layers)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.filter = ''
    el.style.transform = ''

    layers.forEach(l => {
      if (!l.enabled) return
      if (l.chance !== undefined && !chanceGate(l.chance)) return
      l.apply(el, l.params)
    })
  }, [layers])

  return <div ref={ref} className="relative w-full h-[60vh] overflow-hidden">{children}</div>
}
