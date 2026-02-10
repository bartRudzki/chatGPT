export function isWebGPUSupported() {
  return typeof navigator !== 'undefined' && 'gpu' in navigator
}
