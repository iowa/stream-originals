import { describe, expect, it } from "vitest";
import { ImdbApiDevMapper } from "../ImdbApiDevMapper.js";
import { Datas } from "../../../utils/data/Datas.js";

describe("ImdbApiDevMapper", () => {
  it("mapInterest", () => {
    const result = new ImdbApiDevMapper().mapInterest("Drama", Datas.ImdbapiInterest_in0000084);

    expect(result).toMatchInlineSnapshot(`
      {
        "category": "Drama",
        "description": "The political drama subgenre features the intricacies of political power, government institutions, political conflicts, and the individuals involved in the political process. These dramas often explore themes of ambition, corruption, ethical dilemmas, and the impact of political decisions on society and individuals.",
        "id": "in0000084",
        "isSubgenre": true,
        "name": "Political Drama",
      }
    `);
  });

  it("mapCredit", () => {
    const result = new ImdbApiDevMapper().mapCredit(Datas.ImdbapiName_nm0000228);

    expect(result).toMatchInlineSnapshot(`
      {
        "id": "nm0000228",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
        "name": "Kevin Spacey",
      }
    `);
  });

  it("mapRating", () => {
    const result = new ImdbApiDevMapper().mapRating("tt1856010",Datas.ImdbapiRating_tt1856010);

    expect(result).toMatchInlineSnapshot(`
      {
        "titleId": "tt1856010",
        "total": "8.6",
        "type": "imdb",
        "voteCount": 552297,
      }
    `);
  });
});