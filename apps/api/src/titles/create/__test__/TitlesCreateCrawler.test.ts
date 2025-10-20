import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Datas } from "../../../lib/utils/data/Datas.js";
import { WikiTitlesScraper } from "../../../lib/source/wikipedia/WikiTitlesScraper.js";
import { TitlesCreateCrawler } from "../TitlesCreateCrawler.js";
import { ImdbMediaRestClient } from "../../../lib/source/imdbmedia/ImdbMediaRestClient.js";
import { getDbMock } from "@repo/common/db/dbMock";
import { DbDrizzle, TitleImagesRepository, TitlesRepository } from "@repo/common";

describe("TitlesCreateCrawler", async () => {
  let { client, db } = await getDbMock();
  let wikiTitlesScraper: WikiTitlesScraper;
  let titlesRepository: TitlesRepository;
  let imdbMediaRestClient: ImdbMediaRestClient;
  let titlesMediaRepository: TitleImagesRepository;
  let crawler: TitlesCreateCrawler;

  beforeEach(() => {
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
      undefined, // imdbMediaMapper can be undefined if not used in test
      wikiTitlesScraper
    );
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
  });

  it("create title found on wikipedia but not in database", async () => {
    (wikiTitlesScraper.findTitles as any).mockResolvedValue([Datas.TitleDraft_HouseOfCards]);
    (imdbMediaRestClient.findTitle as any).mockResolvedValue(Datas.ImdbMediaTitle_HouseOfCards);

    const response = await crawler.create('netflix');

    expect(response).toMatchInlineSnapshot(`
      {
        "items": [
          {
            "streamer": "netflix",
            "totalDraftsInDatabase": 0,
            "totalInDatabase": 1,
            "totalOnWebsite": 1,
          },
        ],
      }
    `)

    const titles = await titlesRepository.get('netflix');
    expect(
      titles.map(({ id, ...rest }) => ({ id: "ignored", ...rest }))
    ).toMatchInlineSnapshot(`
      [
        {
          "id": "ignored",
          "name": "House of Cards",
          "plot": null,
          "premiere": "2013-02-01",
          "streamer": "netflix",
          "type": "tvSeries",
        },
      ]
    `)
    const titlesMedia = await titlesMediaRepository.getByTitleId(titles[0].id);
    expect(
      titlesMedia.map(({ id, titleId, ...rest }) => ({
        id: "ignored",
        titleId: "ignored", ...rest
      }))
    ).toMatchInlineSnapshot(`
      [
        {
          "height": 2048,
          "id": "ignored",
          "titleId": "ignored",
          "type": "poster",
          "url": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
          "width": 1382,
        },
      ]
    `);
  });


});