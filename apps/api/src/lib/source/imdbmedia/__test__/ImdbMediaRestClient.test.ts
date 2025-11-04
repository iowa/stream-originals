import { describe, expect, it } from "vitest";
import { ImdbMediaRestClient } from "../ImdbMediaRestClient.js";
import { CDatas, TestFiles } from "@repo/common";
import { ImdbMediaResponse } from "../ImdbMediaTypes.js";

describe("ImdbMediaRestClient", () => {
  it("findTitle House of Cards", async () => {
    const result = await new ImdbMediaRestClient().findTitle(CDatas.TitleDraft_HouseOfCards);
    expect(result?.l).equals("House of Cards");
    expect(result?.y).equals(2013);
    expect(result?.yr).equals("2013-2018");
  });

  it("findTitle Mr. & Mrs. Smith", async () => {
    const data: ImdbMediaResponse = TestFiles.loadJson(__dirname, "/data/imdbMedia_Mr_&_Mrs_Smith_responses.json");

    const result = new ImdbMediaRestClient().filterFindTitle(data, {
      episodes: 8,
      finale: null,
      id: "",
      name: "Mr. & Mrs. Smith",
      premiere: "2024-02-02",
      seasons: 1,
      streamer: "primeVideo",
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "i": {
          "height": 2880,
          "imageUrl": "https://m.media-amazon.com/images/M/MV5BZmQ0NmMyMDItZDNiNC00ZTBiLWI0ZDgtMTk5NDBmNmZhMDZmXkEyXkFqcGc@._V1_.jpg",
          "width": 1944,
        },
        "id": "tt14044212",
        "l": "Mr. & Mrs. Smith",
        "q": "TV series",
        "qid": "tvSeries",
        "rank": 3878,
        "s": "Donald Glover, Maya Erskine",
        "y": 2024,
      }
    `)
  });

});
