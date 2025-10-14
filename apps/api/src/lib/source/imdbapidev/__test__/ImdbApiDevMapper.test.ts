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
});