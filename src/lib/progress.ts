export function isProgressInRange(progress: number): boolean {
  return Number.isFinite(progress) && progress >= 0 && progress <= 100;
}
