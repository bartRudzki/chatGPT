export interface GlitchLayer {
  id: string
  label: string
  enabled: boolean
  chance?: number
  params: Record<string, any>
  apply: (el: HTMLElement, params: any) => void
}
