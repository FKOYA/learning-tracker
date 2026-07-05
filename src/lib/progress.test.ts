import { describe, expect, it } from "vitest";
import { isProgressInRange, sortByProgressDesc } from "./progress";

describe("isProgressInRange", () => {
  it("returns true for values between 0 and 100", () => {
    expect(isProgressInRange(0)).toBe(true);
    expect(isProgressInRange(50)).toBe(true);
    expect(isProgressInRange(100)).toBe(true);
  });

  it("returns false for values outside the range", () => {
    expect(isProgressInRange(-1)).toBe(false);
    expect(isProgressInRange(101)).toBe(false);
  });

  it("returns false for non-finite values", () => {
    expect(isProgressInRange(Number.NaN)).toBe(false);
    expect(isProgressInRange(Number.POSITIVE_INFINITY)).toBe(false);
    expect(isProgressInRange(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});

describe("sortByProgressDesc", () => {
  it("returns items sorted by progress in descending order", () => {
    const items = [
      { title: "SQL", category: "Database", progress: 30, memo: "join" },
      { title: "Next.js", category: "Frontend", progress: 70, memo: "rsc" },
      { title: "Docker", category: "Infrastructure", progress: 55, memo: "build" },
    ];

    expect(sortByProgressDesc(items).map((item) => item.title)).toEqual([
      "Next.js",
      "Docker",
      "SQL",
    ]);
  });

  it("sorts correctly when items include additional fields like category", () => {
    const items = [
      { title: "A", category: "Frontend", progress: 10, memo: "a" },
      { title: "B", category: "Database", progress: 90, memo: "b" },
      { title: "C", category: "Language", progress: 50, memo: "c" },
    ];

    expect(sortByProgressDesc(items).map((item) => item.title)).toEqual(["B", "C", "A"]);
  });

  it("keeps original order for items with the same progress", () => {
    const items = [
      { title: "A", progress: 50 },
      { title: "B", progress: 50 },
      { title: "C", progress: 40 },
    ];

    expect(sortByProgressDesc(items).map((item) => item.title)).toEqual(["A", "B", "C"]);
  });

  it("does not mutate the original array", () => {
    const items = [
      { title: "A", progress: 10 },
      { title: "B", progress: 90 },
    ];

    const copyBeforeSort = [...items];
    sortByProgressDesc(items);

    expect(items).toEqual(copyBeforeSort);
  });
});
