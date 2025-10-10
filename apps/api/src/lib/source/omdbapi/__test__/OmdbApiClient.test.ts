import { describe, expect, it } from "vitest";
import { OmdbApiRestClient } from "../OmdbApiRestClient.js";

describe("OmdbApiRestClient", () => {

  it("findTitle tt0111161", async () => {

    const result = await OmdbApiRestClient.findTitle('tt0111161');

    expect(result.imdbID).toBe("tt0111161");
    expect(result.Type).toBe("movie");
    expect(result.Title).toBe("The Shawshank Redemption");
    expect(result.Year).toBe("1994");
    expect(result.Genre).toBe("Drama");
  });

});
