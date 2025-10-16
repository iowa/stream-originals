import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDbMock } from "@repo/common/db/dbMock";
import {
  Db, Interest,
  InterestsRepository,
  TestFiles,
  TitleDto,
  TitlesFactory,
  TitlesRepository
} from "@repo/common";
import { TitlesPatcher } from "../TitlesPatcher.js";
import { ImdbApiDevRestClient } from "../../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../../lib/source/imdbapidev/ImdbApiDevMapper.js";
import { ImdbapiBatchGetTitlesResponse } from "../../../lib/source/imdbapidev/generated/index.js";

describe("TitlesPatcher", async () => {
  let { client, db } = await getDbMock();
  let titlesRepository: TitlesRepository;
  let imdbApiDevRestClient: ImdbApiDevRestClient;
  let imdbApiDevMapper: ImdbApiDevMapper;
  let titlesFactory: TitlesFactory;
  let interestsRepository: InterestsRepository;
  let cut: TitlesPatcher;

  beforeEach(() => {
    titlesRepository = new TitlesRepository(db as unknown as Db);
    imdbApiDevRestClient = {
      getTitles: vi.fn()
    } as unknown as ImdbApiDevRestClient;

    imdbApiDevMapper = new ImdbApiDevMapper();
    interestsRepository = new InterestsRepository(db as unknown as Db);
    titlesFactory = new TitlesFactory(interestsRepository)

    cut = new TitlesPatcher(
      titlesRepository,
      imdbApiDevRestClient,
      imdbApiDevMapper,
      titlesFactory
    );
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
  });

  it("patch title", async () => {
    const titleDto: TitleDto = TestFiles.loadJson(__dirname, `/data/title_tt1856010.json`);
    await prepareData(titleDto);

    const apiResponse: ImdbapiBatchGetTitlesResponse = TestFiles.loadJson(__dirname, `/data/imdbapidev_tt1856010.json`);
    (imdbApiDevRestClient.getTitles as any).mockResolvedValue(apiResponse);

    const titlesPatchResponse = await cut.patch('netflix');

    const titles = await titlesRepository.getWithRelations('netflix');
    expect(titles).toMatchInlineSnapshot(`
      [
        {
          "id": "53f423b6-1cf3-4544-b090-8708fd00543a",
          "images": [],
          "imdbId": "tt1856010",
          "imdbType": "tvSeries",
          "interests": [
            {
              "category": "Drama",
              "description": "The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistic and emotionally impactful way. Dramas delve into the complexities of human life, often exploring themes of love, loss, morality, societal issues, personal growth, with the aim to evoke an emotional response from the audience by presenting relatable and thought-provoking stories.",
              "id": "in0000076",
              "isSubgenre": null,
              "name": "Drama",
            },
            {
              "category": "Drama",
              "description": "The epic subgenre features grand and sweeping stories often set against significant historical, cultural, or societal backdrops. Epic dramas are characterized by their scope, scale, and often lengthy runtime, as they aim to capture the grandeur of human experiences, events, and emotions.",
              "id": "in0000077",
              "isSubgenre": true,
              "name": "Epic",
            },
            {
              "category": "Drama",
              "description": "The political drama subgenre features the intricacies of political power, government institutions, political conflicts, and the individuals involved in the political process. These dramas often explore themes of ambition, corruption, ethical dilemmas, and the impact of political decisions on society and individuals.",
              "id": "in0000084",
              "isSubgenre": true,
              "name": "Political Drama",
            },
            {
              "category": "Thriller",
              "description": "The thriller genre features suspense, tension, and excitement. These stories are known for keeping audiences on the edge of their seats and delivering intense emotional experiences by revolving around high-stakes situations, dangerous conflicts, and the constant anticipation of unexpected events.",
              "id": "in0000186",
              "isSubgenre": null,
              "name": "Thriller",
            },
          ],
          "name": "House of Cards",
          "premiere": "2013-02-01",
          "streamer": "netflix",
        },
      ]
    `)
  });

  async function prepareData(original: TitleDto) {
    await titlesRepository.insert(original);
    const interests: Interest[] = TestFiles.loadJson(__dirname, `data/interests_tt1856010.json`);
    for (const interest of interests) {
      await interestsRepository.insert(interest)
    }
  }


});