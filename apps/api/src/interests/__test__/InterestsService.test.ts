import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { getDbMock } from "@repo/common/db/dbMock";
import { Db, InterestsRepository } from "@repo/common";
import { InterestsService } from "../InterestsService.js";
import { ImdbApiDevRestClient } from "../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../lib/source/imdbapidev/ImdbApiDevMapper.js";
import {
  ImdbapiInterestCategory,
  ImdbapiListListInterestCategoriesResponse
} from "../../lib/source/imdbapidev/generated/index.js";
import { Datas } from "../../lib/utils/data/Datas.js";

describe("InterestsService", async () => {
  let { client, db } = await getDbMock();
  let imdbApiDevRestClient: ImdbApiDevRestClient;
  let interestsRepository: InterestsRepository;
  let imdbApiDevMapper: ImdbApiDevMapper;
  let cut: InterestsService;

  beforeEach(() => {
    imdbApiDevRestClient = {
      getInterests: vi.fn()
    } as unknown as ImdbApiDevRestClient;
    interestsRepository = new InterestsRepository(db as unknown as Db);
    imdbApiDevMapper = new ImdbApiDevMapper();
    cut = new InterestsService(
      imdbApiDevRestClient,
      interestsRepository,
      imdbApiDevMapper
    );
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
  });

  it("create interests", async () => {
    (imdbApiDevRestClient.getInterests as any).mockResolvedValue({
      categories: [{
        category: 'Drama',
        interests: [Datas.ImdbapiInterest_in0000084]
      } as ImdbapiInterestCategory]
    } as ImdbapiListListInterestCategoriesResponse);
    const response = await cut.create();

    expect(response).toMatchInlineSnapshot(`
      {
        "totalInApi": 1,
        "totalInDatabase": 1,
      }
    `)

    const interests = await interestsRepository.getAll();

    expect(interests).toMatchInlineSnapshot(`
      [
        {
          "category": "Drama",
          "description": "The political drama subgenre features the intricacies of political power, government institutions, political conflicts, and the individuals involved in the political process. These dramas often explore themes of ambition, corruption, ethical dilemmas, and the impact of political decisions on society and individuals.",
          "id": "in0000084",
          "isSubgenre": true,
          "name": "Political Drama",
        },
      ]
    `)
  });

});