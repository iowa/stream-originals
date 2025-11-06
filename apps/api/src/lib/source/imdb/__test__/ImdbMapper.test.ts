import { describe, expect, it } from "vitest";
import { ImdbMapper } from "../ImdbMapper.js";
import { CDatas } from "@repo/common";
import { Datas } from "../../../utils/data/Datas.js";

describe("ImdbMapper", () => {
  it("mapTitle", () => {
    const result = new ImdbMapper().mapTitle(CDatas.TitleDraft_HouseOfCards, Datas.ImdbTitle_HouseOfCards)

    expect(result).toMatchInlineSnapshot(`
      {
        "episodes": 73,
        "finale": "2018-11-02",
        "id": "tt1856010",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
        "name": "House of Cards",
        "premiere": "2013-02-01",
        "seasons": 6,
        "streamer": "netflix",
        "type": "tvSeries",
      }
    `);
  });

});
