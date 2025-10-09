import { describe, expect, it } from "vitest";
import { Times } from "../Times.js";

describe("Times", () => {
  it("format YYYY-MM-DD", () => {
    const result = Times.format("September 26, 2025", Times._sqlDateFormat);

    expect(result).toEqual("2025-09-26");
  });

  it("format TBA", () => {
    const result = Times.format("TBA", Times._sqlDateFormat);

    expect(result).toBeUndefined();
  });
});
