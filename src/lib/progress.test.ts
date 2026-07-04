import { describe, expect, it } from "vitest";
import { isProgressInRange } from "./progress";

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
