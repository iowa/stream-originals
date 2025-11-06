import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Datas } from "../../../lib/utils/data/Datas.js";
import { WikiPageTitlesScraper } from "../../../lib/source/wikipedia/WikiPageTitlesScraper.js";
import { TitlesCreateCrawler } from "../TitlesCreateCrawler.js";
import { getDbMock } from "@repo/common/db/dbMock";
import { CDatas, DbDrizzle, TitlesRepository } from "@repo/common";
import { PGlite } from "@electric-sql/pglite";
import { ImdbRestClient } from "../../../lib/source/imdb/ImdbRestClient.js";

describe("TitlesCreateCrawler", async () => {
  let pgClient: PGlite
  let wikiTitlesScraper: WikiPageTitlesScraper;
  let titlesRepository: TitlesRepository;
  let imdbRestClient: ImdbRestClient;
  let crawler: TitlesCreateCrawler;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    wikiTitlesScraper = {
      getTitles: vi.fn()
    } as unknown as WikiPageTitlesScraper;

    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);

    imdbRestClient = {
      findTitle: vi.fn()
    } as unknown as ImdbRestClient;

    crawler = new TitlesCreateCrawler(
      titlesRepository,
      imdbRestClient,
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
    (wikiTitlesScraper.getTitles as any).mockResolvedValue([CDatas.TitleDraft_HouseOfCards]);
    (imdbRestClient.findTitle as any).mockResolvedValue(Datas.ImdbTitle_HouseOfCards);

    const response = await crawler.upsert('netflix');

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
          "episodes": 73,
          "finale": "2018-11-02",
          "id": "tt1856010",
          "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
          "name": "House of Cards",
          "plot": null,
          "premiere": "2013-02-01",
          "runtimeSeconds": null,
          "seasons": 6,
          "streamer": "netflix",
          "type": "tvSeries",
          "updatedAt": 1970-01-01T00:00:00.000Z,
        },
      ]
    `)
  });

  it("create title draft found on wikipedia but not imdbMedia", async () => {
    (wikiTitlesScraper.getTitles as any).mockResolvedValue([CDatas.TitleDraft_HouseOfCards]);
    (imdbRestClient.findTitle as any).mockResolvedValue(undefined);

    const response = await crawler.upsert('netflix');

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
            "episodes": 73,
            "finale": "2018-11-02",
            "id": "ignored",
            "name": "House of Cards",
            "premiere": "2013-02-01",
            "seasons": 6,
            "streamer": "netflix",
          },
        ]
      `)
  });


});