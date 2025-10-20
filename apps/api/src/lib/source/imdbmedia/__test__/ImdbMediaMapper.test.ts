import { describe, expect, it } from "vitest";
import { ImdbMediaMapper } from "../ImdbMediaMapper.js";
import { Datas } from "../../../utils/data/Datas.js";

describe("ImdbMediaMapper", () => {
  it("mapTitle", () => {
    const result = new ImdbMediaMapper().mapTitle(Datas.TitleDraft_HouseOfCards, Datas.ImdbMediaTitle_HouseOfCards)

    expect(result).toMatchInlineSnapshot(`
      {
        "id": "tt1856010",
        "name": "House of Cards",
        "premiere": "2013-02-01",
        "streamer": "netflix",
        "type": "tvSeries",
      }
    `);
  });

  it("mapTitle", () => {
    const result = new ImdbMediaMapper().mapPoster('tt1856010', Datas.ImdbMediaTitleImage_HouseOfCards)
    expect(result).toMatchInlineSnapshot(`
      {
        "height": 2048,
        "titleId": "tt1856010",
        "type": "poster",
        "url": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
        "width": 1382,
      }
    `);
  });

});
