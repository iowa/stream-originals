import { describe, expect, it } from "vitest";
import { ImdbApiDevRestClient } from "../ImdbApiDevRestClient.js";


describe("ImdbApiDevRestClient", () => {
  it("getTitles tt1856010", async () => {
    const result = await new ImdbApiDevRestClient().getTitles(['tt1856010']);
    if (!result.titles || result.titles.length === 0) {
      throw new Error("titles not found or empty");
    }
    const title = result.titles.at(0);
    expect(title?.id).toBe("tt1856010");
    expect(title?.type).toBe("tvSeries");
    expect(title?.primaryTitle).toBe("House of Cards");
    expect(title?.startYear).toBe(2013);
    expect(title?.genres?.at(0)).toBe("Drama");
  })
});
