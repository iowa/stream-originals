import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { TitlesRepository } from "../TitlesRepository.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { TitlesMerger } from "../TitlesMerger.js";
import { TestFiles } from "../../utils/files/TestFiles.js";
import { Credit, Interest } from "../../db/dbTypes.js";
import { TitlePatchDto } from "../../dto/dtoTypes.js";
import { InterestsRepository } from "../../interests/InterestsRepository.js";
import { CreditsRepository } from "../../credits/CreditsRepository.js";
import { PGlite } from "@electric-sql/pglite";

describe("TitlesMerger", async () => {
  let pgClient: PGlite
  let titlesRepository: TitlesRepository;
  let interestsRepository: InterestsRepository;
  let creditsRepository: CreditsRepository;
  let cut: TitlesMerger;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);
    interestsRepository = new InterestsRepository(db as unknown as DbDrizzle);
    creditsRepository = new CreditsRepository(db as unknown as DbDrizzle);
    cut = new TitlesMerger(db as unknown as DbDrizzle);
    vi.clearAllMocks();
    vi.setSystemTime(0)
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("Merge original with updated and inverse", async () => {
    const original: TitlePatchDto = TestFiles.loadJson(__dirname, 'data/title_original_tt1856010.json');
    const updated: TitlePatchDto = TestFiles.loadJson(__dirname, 'data/title_updated_tt1856010.json');
    await prepareData(original)
    await cut.merge(original, updated);

    const result = await titlesRepository.getTitlePatchDtos('netflix');

    expect(result).toMatchInlineSnapshot(`
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
          "plot": "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
          "premiere": "2013-02-01",
          "ratings": [
            {
              "total": "8.6",
              "type": "imdb",
              "voteCount": 552297,
            },
          ],
          "runtimeSeconds": 3000,
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
    `);

    await cut.merge(updated, original);

    const resultInverse = await titlesRepository.getTitlePatchDtos('netflix');
    expect(resultInverse).toMatchInlineSnapshot(`
      [
        {
          "directors": [],
          "id": "tt1856010",
          "interests": [],
          "name": "House of Cards",
          "plot": null,
          "premiere": "2013-02-01",
          "ratings": [],
          "runtimeSeconds": null,
          "stars": [],
          "streamer": "netflix",
          "type": "tvSeries",
          "updatedAt": 1970-01-01T00:00:00.000Z,
          "writers": [],
        },
      ]
    `);
  });

  async function prepareData(original: TitlePatchDto) {
    await titlesRepository.insert(original);
    const interests: Interest[] = TestFiles.loadJson(__dirname, `data/interests_tt1856010.json`);
    for (const interest of interests) {
      await interestsRepository.insert(interest)
    }
    const credits: Credit[] = TestFiles.loadJson(__dirname, `data/credits_tt1856010.json`);
    for (const credit of credits) {
      await creditsRepository.insert(credit)
    }
  }

});