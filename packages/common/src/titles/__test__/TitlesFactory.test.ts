import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { TitlesRepository } from "../TitlesRepository.js";
import { Db } from "../../db/db.js";
import { TitlesFactory } from "../TitlesFactory.js";
import { InterestsRepository } from "../../interests/InterestsRepository.js";
import { TestFiles } from "../../utils/files/TestFiles.js";
import { TitleDto } from "../../db/dbTypes.js";

describe("TitlesFactory", async () => {
  let { client, db } = await getDbMock();
  let titlesRepository: TitlesRepository;
  let interestsRepository: InterestsRepository;
  let cut: TitlesFactory;

  beforeEach(() => {
    titlesRepository = new TitlesRepository(db as unknown as Db);
    interestsRepository = new InterestsRepository(db as unknown as Db);
    cut = new TitlesFactory(
      titlesRepository,
      interestsRepository,
    );
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
  });

  it("Merge original with updated and inverse", async () => {
    const original: TitleDto = TestFiles.loadJson(__dirname, 'data/title_original_tt7772588.json');
    const updated: TitleDto = TestFiles.loadJson(__dirname, 'data/title_updated_tt7772588.json');
    await cut.insert(updated);
    await cut.merge(original, updated);

    const result = await titlesRepository.getWithRelations('appleTV+');

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "id": "53f423b6-1cf3-4544-b090-8708fd00543a",
          "images": [],
          "imdbId": "tt7772588",
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
              "category": "Sci-Fi",
              "description": "The sci-fi genre, short for science fiction, features imaginative and futuristic concepts that are often rooted in scientific principles, technology, and possibilities. These stories delve into "what if" questions and can serve as a platform to address contemporary social, political, and ethical issues by projecting them onto future or alternate settings.",
              "id": "in0000162",
              "isSubgenre": null,
              "name": "Sci-Fi",
            },
            {
              "category": "Sci-Fi",
              "description": "The space sci-fi subgenre features stories set primarily in outer space or involving space travel, exploration, and interstellar adventures. Space sci-fi often emphasizes the wonders and challenges of space travel, as well as the exploration of unknown frontiers, advanced technology, and encounters with extraterrestrial life.",
              "id": "in0000164",
              "isSubgenre": true,
              "name": "Space Sci-Fi",
            },
          ],
          "name": "For All Mankind",
          "premiere": "2019-11-01",
          "streamer": "appleTV+",
        },
      ]
    `);

    await cut.merge(updated, original);

    const resultInverse = await titlesRepository.getWithRelations('appleTV+');
    expect(resultInverse).toMatchInlineSnapshot(`
      [
        {
          "id": "53f423b6-1cf3-4544-b090-8708fd00543a",
          "images": [],
          "imdbId": "tt7772588",
          "imdbType": "tvSeries",
          "interests": [],
          "name": "For All Mankind",
          "premiere": "2019-11-01",
          "streamer": "appleTV+",
        },
      ]
    `);
  });

});