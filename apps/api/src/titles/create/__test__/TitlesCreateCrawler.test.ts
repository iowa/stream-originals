import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Datas } from "../../../lib/utils/data/Datas.js";
import { WikiTitlesScraper } from "../../../lib/source/wikipedia/WikiTitlesScraper.js";
import { TitlesCreateCrawler } from "../TitlesCreateCrawler.js";
import { ImdbMediaRestClient } from "../../../lib/source/imdbmedia/ImdbMediaRestClient.js";
import { getDbMock } from "@repo/common/db/dbMock";
import { DbDrizzle, TitleImagesRepository, TitlesRepository } from "@repo/common";
import { PGlite } from "@electric-sql/pglite";

describe("TitlesCreateCrawler", async () => {
  let pgClient: PGlite
  let wikiTitlesScraper: WikiTitlesScraper;
  let titlesRepository: TitlesRepository;
  let imdbMediaRestClient: ImdbMediaRestClient;
  let titlesMediaRepository: TitleImagesRepository;
  let crawler: TitlesCreateCrawler;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    wikiTitlesScraper = {
      findTitles: vi.fn()
    } as unknown as WikiTitlesScraper;

    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);

    imdbMediaRestClient = {
      findTitle: vi.fn()
    } as unknown as ImdbMediaRestClient;

    titlesMediaRepository = new TitleImagesRepository(db as unknown as DbDrizzle);

    crawler = new TitlesCreateCrawler(
      titlesRepository,
      titlesMediaRepository,
      imdbMediaRestClient,
      undefined,
      wikiTitlesScraper
    );
    vi.clearAllMocks();
    vi.setSystemTime(0)
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("create title found on wikipedia and imdbMedia", async () => {
    (wikiTitlesScraper.findTitles as any).mockResolvedValue([Datas.TitleDraft_HouseOfCards]);
    (imdbMediaRestClient.findTitle as any).mockResolvedValue(Datas.ImdbMediaTitle_HouseOfCards);

    const response = await crawler.create('netflix');

    expect(response).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "totalDraftsInDatabase": 0,
            "totalInDatabase": 1,
            "totalOnWebsite": 1,
            "url": "https://en.wikipedia.org/wiki/List_of_Netflix_original_programming",
          },
          {
            "totalDraftsInDatabase": 0,
            "totalInDatabase": 1,
            "totalOnWebsite": 1,
            "url": "https://en.wikipedia.org/wiki/List_of_ended_Netflix_original_programming",
          },
        ],
      }
    `)

    const titles = await titlesRepository.get('netflix');
    expect(
      titles
    ).toMatchInlineSnapshot(`
      [
        {
          "id": "tt1856010",
          "name": "House of Cards",
          "plot": null,
          "premiere": "2013-02-01",
          "runtimeSeconds": null,
          "streamer": "netflix",
          "type": "tvSeries",
          "updatedAt": 1970-01-01T00:00:00.000Z,
        },
      ]
    `)
    const titlesMedia = await titlesMediaRepository.getByTitleId(titles[0].id);
    expect(
      titlesMedia.map(({ id, ...rest }) => ({
        id: "ignored",
        ...rest
      }))
    ).toMatchInlineSnapshot(`
      [
        {
          "height": 2048,
          "id": "ignored",
          "titleId": "tt1856010",
          "type": "poster",
          "url": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
          "width": 1382,
        },
      ]
    `);
  });

  it("create title draft found on wikipedia but not imdbMedia", async () => {
    (wikiTitlesScraper.findTitles as any).mockResolvedValue([Datas.TitleDraft_HouseOfCards]);
    (imdbMediaRestClient.findTitle as any).mockResolvedValue(undefined);

    const response = await crawler.create('netflix');

    expect(response).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "totalDraftsInDatabase": 1,
            "totalInDatabase": 0,
            "totalOnWebsite": 1,
            "url": "https://en.wikipedia.org/wiki/List_of_Netflix_original_programming",
          },
          {
            "totalDraftsInDatabase": 1,
            "totalInDatabase": 0,
            "totalOnWebsite": 1,
            "url": "https://en.wikipedia.org/wiki/List_of_ended_Netflix_original_programming",
          },
        ],
      }
    `)

    const titles = await titlesRepository.getDrafts('netflix');
    expect(
      titles.map(({ id, ...rest }) => ({
        id: "ignored",
        ...rest
      }))).toMatchInlineSnapshot(`
        [
          {
            "id": "ignored",
            "name": "House of Cards",
            "premiere": "2013-02-01",
            "streamer": "netflix",
          },
        ]
      `)
  });


});