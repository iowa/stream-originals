import { describe, expect, it } from "vitest";
import { OmdbApiRestClient } from "../OmdbApiRestClient.js";

describe("OmdbApiRestClient", () => {

  it("findTitle tt1856010", async () => {

    const result = await OmdbApiRestClient.findTitle('tt1856010');

    expect(result.imdbID).toBe("tt1856010");
    expect(result.Type).toBe("series");
    expect(result.Title).toBe("House of Cards");
    expect(result.Year).toBe("2013–2018");
    expect(result.Genre).toBe("Drama, Thriller");
  });

});
