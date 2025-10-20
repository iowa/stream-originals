import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDbMock } from "@repo/common/db/dbMock";
import {
  DbDrizzle,
  InterestsRepository,
  TestFiles,
  TitlePatchDto,
  TitlesMerger,
  TitlesRepository
} from "@repo/common";
import { TitlesPatcher } from "../TitlesPatcher.js";
import { ImdbApiDevRestClient } from "../../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../../lib/source/imdbapidev/ImdbApiDevMapper.js";
import { ImdbapiBatchGetTitlesResponse } from "../../../lib/source/imdbapidev/generated/index.js";
import { CreditsRepository } from "@repo/common/credits/CreditsRepository";
import { PGlite } from "@electric-sql/pglite";

describe("TitlesPatcher", async () => {
  let pgClient: PGlite
  let titlesRepository: TitlesRepository;
  let imdbApiDevRestClient: ImdbApiDevRestClient;
  let imdbApiDevMapper: ImdbApiDevMapper;
  let titlesFactory: TitlesMerger;
  let interestsRepository: InterestsRepository;
  let creditsRepository: CreditsRepository;
  let cut: TitlesPatcher;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
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
    vi.setSystemTime(0)
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("patch title", async () => {
    const titleDto: TitlePatchDto = TestFiles.loadJson(__dirname, `/data/title_tt1856010.json`);
    await prepareData(titleDto);

    const apiResponse: ImdbapiBatchGetTitlesResponse = TestFiles.loadJson(__dirname, `/data/imdbapidev_tt1856010.json`);
    (imdbApiDevRestClient.getTitles as any).mockResolvedValue(apiResponse);

    const titlesPatchResponse = await cut.patch('netflix', 0);

    const titles = await titlesRepository.getTitlePatchDtos('netflix');
    expect(titles).toMatchInlineSnapshot(`
      [
        {
          "directors": [
            {
              "credit": {
                "id": "nm0000705",
                "name": "Robin Wright",
              },
            },
            {
              "credit": {
                "id": "nm0001226",
                "name": "James Foley",
              },
            },
            {
              "credit": {
                "id": "nm0171315",
                "name": "John David Coles",
              },
            },
          ],
          "id": "tt1856010",
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
          "plot": " ",
          "premiere": "2013-02-01",
          "stars": [
            {
              "credit": {
                "id": "nm0000228",
                "name": "Kevin Spacey",
              },
            },
            {
              "credit": {
                "id": "nm0000705",
                "name": "Robin Wright",
              },
            },
            {
              "credit": {
                "id": "nm0318703",
                "name": "Michel Gill",
              },
            },
            {
              "credit": {
                "id": "nm0544718",
                "name": "Kate Mara",
              },
            },
          ],
          "streamer": "netflix",
          "type": "tvSeries",
          "updatedAt": 1970-01-01T00:00:00.000Z,
          "writers": [
            {
              "credit": {
                "id": "nm0203577",
                "name": "Andrew Davies",
              },
            },
            {
              "credit": {
                "id": "nm0229645",
                "name": "Michael Dobbs",
              },
            },
            {
              "credit": {
                "id": "nm2802722",
                "name": "Beau Willimon",
              },
            },
          ],
        },
      ]
    `)
  });

  async function prepareData(original: TitlePatchDto) {
    await titlesRepository.insert(original);
  }

});