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

describe("TitlesMerger", async () => {
  let { client, db } = await getDbMock();
  let titlesRepository: TitlesRepository;
  let interestsRepository: InterestsRepository;
  let creditsRepository: CreditsRepository;
  let cut: TitlesMerger;

  beforeEach(() => {
    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);
    interestsRepository = new InterestsRepository(db as unknown as DbDrizzle);
    creditsRepository = new CreditsRepository(db as unknown as DbDrizzle);
    cut = new TitlesMerger(db as unknown as DbDrizzle);
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
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
          "credits": [
            {
              "credit": {
                "role": "star",
              },
              "id": "nm0000228",
              "name": "Kevin Spacey",
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
    `);

    await cut.merge(updated, original);

    const resultInverse = await titlesRepository.getTitlePatchDtos('netflix');
    expect(resultInverse).toMatchInlineSnapshot(`
      [
        {
          "credits": [],
          "id": "53f423b6-1cf3-4544-b090-8708fd00543a",
          "imdbId": "tt1856010",
          "imdbType": "tvSeries",
          "interests": [],
          "name": "House of Cards",
          "plot": null,
          "premiere": "2013-02-01",
          "streamer": "netflix",
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