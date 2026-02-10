'use client'
import { Stage } from '../src/engine/Stage'
import { MenuBar, LayerManager, PropertiesPanel, PromptPanel, QAPanel } from '../src/ui'

export default function Page() {
  return (
    <main>
      <MenuBar />
      <Stage>
        <div contentEditable className="p-6 text-2xl">GLITCH LAB</div>
      </Stage>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <LayerManager />
        <PropertiesPanel />
        <PromptPanel />
        <QAPanel />
      </div>
    </main>
  )
}
