import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { TitlesRepository } from "../TitlesRepository.js";
import { Db } from "../../db/db.js";
import { TitlesMerger } from "../TitlesMerger.js";
import { InterestsRepository } from "../../interests/InterestsRepository.js";
import { TestFiles } from "../../utils/files/TestFiles.js";
import { Interest, TitleDto } from "../../db/dbTypes.js";

describe("TitlesMerger", async () => {
  let { client, db } = await getDbMock();
  let titlesRepository: TitlesRepository;
  let interestsRepository: InterestsRepository;
  let cut: TitlesMerger;

  beforeEach(() => {
    titlesRepository = new TitlesRepository(db as unknown as Db);
    interestsRepository = new InterestsRepository(db as unknown as Db);
    cut = new TitlesMerger(
      titlesRepository,
      interestsRepository,
    );
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
  });

  it("Merge original with updated and inverse", async () => {
    const original: TitleDto = TestFiles.loadJson(__dirname, 'data/title_original_tt1856010.json');
    const updated: TitleDto = TestFiles.loadJson(__dirname, 'data/title_updated_tt1856010.json');
    await prepareData(original)
    await cut.merge(original, updated);

    const result = await titlesRepository.getWithRelations('netflix');

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "credits": [],
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
          "plot": "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
          "premiere": "2013-02-01",
          "streamer": "netflix",
        },
      ]
    `);

    await cut.merge(updated, original);

    const resultInverse = await titlesRepository.getWithRelations('netflix');
    expect(resultInverse).toMatchInlineSnapshot(`
      [
        {
          "credits": [],
          "id": "53f423b6-1cf3-4544-b090-8708fd00543a",
          "images": [],
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

  async function prepareData(original: TitleDto) {
    await titlesRepository.insert(original);
    const interests: Interest[] = TestFiles.loadJson(__dirname, `data/interests_tt1856010.json`);
    for (const interest of interests) {
      await interestsRepository.insert(interest)
    }
  }

});