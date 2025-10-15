import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getDbMock } from "@repo/common/db/dbMock";
import {
  Db,
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
  let cut: TitlesPatcher;

  beforeEach(() => {
    titlesRepository = new TitlesRepository(db as unknown as Db);
    imdbApiDevRestClient = {
      getTitles: vi.fn()
    } as unknown as ImdbApiDevRestClient;

    imdbApiDevMapper = new ImdbApiDevMapper();
    let interestsRepository = new InterestsRepository(db as unknown as Db);
    titlesFactory = new TitlesFactory(titlesRepository, interestsRepository)

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
    const titleDto: TitleDto = TestFiles.loadJson(__dirname, `/data/title_tt7772588.json`);
    await titlesFactory.insert(titleDto)
    const apiResponse: ImdbapiBatchGetTitlesResponse = TestFiles.loadJson(__dirname, `/data/imdbapidev_tt7772588.json`);
    (imdbApiDevRestClient.getTitles as any).mockResolvedValue(apiResponse);

    const titlesPatchResponse = await cut.patch('appleTV+');

    const titles = await titlesRepository.getWithRelations('appleTV+');
    expect(titles).toMatchInlineSnapshot(`
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
    `)
  });


});