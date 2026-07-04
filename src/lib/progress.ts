export function isProgressInRange(progress: number): boolean {
  return Number.isFinite(progress) && progress >= 0 && progress <= 100;
}

type ProgressItem = {
  progress: number;
};

export function sortByProgressDesc<T extends ProgressItem>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.progress - a.progress);
}
