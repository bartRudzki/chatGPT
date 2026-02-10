'use client'
import { AsciiPanel } from './AsciiPanel'
import type { UIPanel } from './types'
export const PromptPanel: UIPanel = () => (
  <AsciiPanel title="AI PROMPT">
    <textarea className="w-full h-32 bg-black border border-green-500" readOnly />
  </AsciiPanel>
)
