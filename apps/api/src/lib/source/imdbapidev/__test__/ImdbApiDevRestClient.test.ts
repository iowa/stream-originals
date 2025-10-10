import { describe, expect, it } from "vitest";
import { ImdbApiDevRestClient } from "../ImdbApiDevRestClient.js";


describe("ImdbApiDevRestClient", () => {
  it("getTitles tt0111161", async () => {
    const result = await ImdbApiDevRestClient.getTitles(['tt0111161']);
    if (!result.titles || result.titles.length === 0) {
      throw new Error("titles not found or empty");
    }
    const title = result.titles.at(0);
    expect(title?.id).toBe("tt0111161");
    expect(title?.type).toBe("movie");
    expect(title?.primaryTitle).toBe("The Shawshank Redemption");
    expect(title?.startYear).toBe(1994);
    expect(title?.genres?.at(0)).toBe("Drama");
  });
});
