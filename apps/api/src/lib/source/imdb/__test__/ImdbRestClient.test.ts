import { describe, expect, it } from "vitest";
import { ImdbRestClient } from "../ImdbRestClient.js";
import { TestData, TestFiles } from "@repo/common";
import { ImdbResponse } from "../ImdbTypes.js";

describe("ImdbRestClient", () => {
  it("findTitle House of Cards", async () => {
    const result = await new ImdbRestClient().findTitle(TestData.TitleDraft_HouseOfCards);
    expect(result?.l).equals("House of Cards");
    expect(result?.y).equals(2013);
    expect(result?.yr).equals("2013-2018");
  });

  it("findTitle Mr. & Mrs. Smith", async () => {
    const data: ImdbResponse = TestFiles.loadJson(__dirname, "/data/imdb_Mr_&_Mrs_Smith_responses.json");

    const result = new ImdbRestClient().filterFindTitle(data, {
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

  it("findTitle Pretzel and the Puppies", async () => {
    const data: ImdbResponse = TestFiles.loadJson(__dirname, "/data/imdb_Pretzel_and_the_Puppies_responses.json");
    const result =  new ImdbRestClient().filterFindTitle(data, {
      "episodes": 18,
      "finale": "2023-02-24",
      "id": "",
      "name": "Pretzel and the Puppies",
      "premiere": "2022-02-11",
      "seasons": 2,
      "streamer": "appleTV+",
    });

    expect(result).toMatchInlineSnapshot(`
      {
        "i": {
          "height": 750,
          "imageUrl": "https://m.media-amazon.com/images/M/MV5BMGE0ZjEwZWQtY2E3Mi00MWFhLTg2MTctNjQ1NmZkOTlhZGE4XkEyXkFqcGc@._V1_.jpg",
          "width": 500,
        },
        "id": "tt17524490",
        "l": "Pretzel and the Puppies",
        "q": "TV series",
        "qid": "tvSeries",
        "rank": 105143,
        "s": "Nasim Pedrad, Alex Jayne Go",
        "y": 2022,
      }
    `)
  });

});
