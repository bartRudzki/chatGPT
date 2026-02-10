export function chanceGate(chance: number) {
  return Math.random() * 100 < chance
}
