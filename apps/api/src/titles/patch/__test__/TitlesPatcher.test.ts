import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDbMock } from "@repo/common/db/dbMock";
import {
  DbDrizzle, Interest,
  InterestsRepository,
  TestFiles, TitlePatchDto,
  TitlesMerger,
  TitlesRepository
} from "@repo/common";
import { TitlesPatcher } from "../TitlesPatcher.js";
import { ImdbApiDevRestClient } from "../../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../../lib/source/imdbapidev/ImdbApiDevMapper.js";
import { ImdbapiBatchGetTitlesResponse } from "../../../lib/source/imdbapidev/generated/index.js";
import { CreditsRepository } from "@repo/common/credits/CreditsRepository";

describe("TitlesPatcher", async () => {
  let { client, db } = await getDbMock();
  let titlesRepository: TitlesRepository;
  let imdbApiDevRestClient: ImdbApiDevRestClient;
  let imdbApiDevMapper: ImdbApiDevMapper;
  let titlesFactory: TitlesMerger;
  let interestsRepository: InterestsRepository;
  let creditsRepository: CreditsRepository;
  let cut: TitlesPatcher;

  beforeEach(() => {
    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);
    imdbApiDevRestClient = {
      getTitles: vi.fn()
    } as unknown as ImdbApiDevRestClient;

    interestsRepository = new InterestsRepository(db as unknown as DbDrizzle);
    creditsRepository = new CreditsRepository(db as unknown as DbDrizzle);
    titlesFactory = new TitlesMerger(db as unknown as DbDrizzle)
    imdbApiDevMapper = new ImdbApiDevMapper(interestsRepository, creditsRepository);

    cut = new TitlesPatcher(
      titlesRepository,
      imdbApiDevRestClient,
      imdbApiDevMapper,
      titlesFactory,
      interestsRepository,
      creditsRepository
    );
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
  });

  it("patch title", async () => {
    const titleDto: TitlePatchDto = TestFiles.loadJson(__dirname, `/data/title_tt1856010.json`);
    await prepareData(titleDto);

    const apiResponse: ImdbapiBatchGetTitlesResponse = TestFiles.loadJson(__dirname, `/data/imdbapidev_tt1856010.json`);
    (imdbApiDevRestClient.getTitles as any).mockResolvedValue(apiResponse);

    const titlesPatchResponse = await cut.patch('netflix');

    const titles = await titlesRepository.getTitlePatchDtos('netflix');
    expect(titles).toMatchInlineSnapshot(`
      [
        {
          "credits": [
            {
              "credit": {
                "role": "star",
              },
              "id": "nm0000705",
              "name": "Robin Wright",
            },
            {
              "credit": {
                "role": "star",
              },
              "id": "nm0000228",
              "name": "Kevin Spacey",
            },
            {
              "credit": {
                "role": "star",
              },
              "id": "nm0318703",
              "name": "Michel Gill",
            },
            {
              "credit": {
                "role": "star",
              },
              "id": "nm0544718",
              "name": "Kate Mara",
            },
          ],
          "id": "53f423b6-1cf3-4544-b090-8708fd00543a",
          "imdbId": "tt1856010",
          "imdbType": "tvSeries",
          "interests": [
            {
              "id": "in0000076",
              "name": "Drama",
            },
            {
              "id": "in0000077",
              "name": "Epic",
            },
            {
              "id": "in0000084",
              "name": "Political Drama",
            },
            {
              "id": "in0000186",
              "name": "Thriller",
            },
          ],
          "name": "House of Cards",
          "plot": "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
          "premiere": "2013-02-01",
          "streamer": "netflix",
        },
      ]
    `)
  });

  async function prepareData(original: TitlePatchDto) {
    await titlesRepository.insert(original);
  }

});