'use client'
import { AsciiPanel } from './AsciiPanel'
import type { UIPanel } from './types'
export const QAPanel: UIPanel = () => (
  <AsciiPanel title="QA"><button>Run tests</button></AsciiPanel>
)
