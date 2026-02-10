import { ReactNode } from 'react'
export function AsciiPanel({ title, children }: { title: string, children: ReactNode }) {
  return (
    <div>
      <div>╔═ {title} ═══════════════╗</div>
      <div className="pl-2">{children}</div>
      <div>╚════════════════════════╝</div>
    </div>
  )
}
