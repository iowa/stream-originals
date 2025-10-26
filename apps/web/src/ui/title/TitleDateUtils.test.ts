import { describe, it, expect } from "vitest";
import { TitleDateUtils } from "~/ui/title/TitleDateUtils";


describe("TitleDateUtils.getYearRange", () => {
  it("returns only start year if finale is not provided", () => {
    expect(TitleDateUtils.getYearRange("2022")).toBe("2022");
    expect(TitleDateUtils.getYearRange("2010-05-01")).toBe("2010");
    expect(TitleDateUtils.getYearRange(null)).toBe("0");
  });

  it("returns start and end year if finale is provided", () => {
    expect(TitleDateUtils.getYearRange("2022", "2025")).toBe("2022–2025");
    expect(TitleDateUtils.getYearRange("2010-05-01", "2018-01-01")).toBe("2010–2018");
  });

  it("handles edge cases", () => {
    expect(TitleDateUtils.getYearRange("abcd", "2020")).toBe("0–2020");
    expect(TitleDateUtils.getYearRange("", "2020")).toBe("0–2020");
    expect(TitleDateUtils.getYearRange(null, "2020")).toBe("0–2020");
  });
});

