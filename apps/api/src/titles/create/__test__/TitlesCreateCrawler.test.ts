import { beforeEach, describe, expect, it, vi } from "vitest";
import { Datas } from "../../../lib/utils/data/Datas.js";
import { WikiTitlesScraper } from "../../../lib/source/wikipedia/WikiTitlesScraper.js";
import { TitlesCreateCrawler } from "../TitlesCreateCrawler.js";
import { TitlesRepository } from "../../repository/TitlesRepository.js";
import { ImdbMediaRestClient } from "../../../lib/source/imdbmedia/ImdbMediaRestClient.js";
import { TitlesMediaRepository } from "../../repository/TitlesMediaRepository.js";

describe("TitlesCreateCrawler", () => {
  let wikiTitlesScraper: WikiTitlesScraper;
  let titlesRepository: TitlesRepository;
  let imdbMediaRestClient: ImdbMediaRestClient;
  let titlesMediaRepository: TitlesMediaRepository;
  let crawler: TitlesCreateCrawler;

  beforeEach(() => {
    wikiTitlesScraper = {
      findTitles: vi.fn()
    } as unknown as WikiTitlesScraper;

    titlesRepository = {
      getTitles: vi.fn(),
      insertTitle: vi.fn(),
      getTitlesCount: vi.fn()
    } as unknown as TitlesRepository;

    imdbMediaRestClient = {
      findTitle: vi.fn()
    } as unknown as ImdbMediaRestClient;

    titlesMediaRepository = {
      insert: vi.fn()
    } as unknown as TitlesMediaRepository;

    crawler = new TitlesCreateCrawler(
      titlesRepository,
      titlesMediaRepository,
      imdbMediaRestClient,
      undefined, // imdbMediaMapper can be undefined if not used in test
      wikiTitlesScraper
    );
    vi.clearAllMocks();
  });

  it("create title found on wikipedia but not in database", async () => {
    (wikiTitlesScraper.findTitles as any).mockResolvedValue([Datas.Title_HouseOfCards]);
    (titlesRepository.getTitles as any).mockResolvedValue([]);
    (imdbMediaRestClient.findTitle as any).mockResolvedValue(Datas.ImdbMediaTitle_HouseOfCards);
    (titlesRepository.insertTitle as any).mockResolvedValue([{ insertedId: 'bdcb16f7-f273-4a15-aeae-8953bbe322b9' }]);
    (titlesMediaRepository.insert as any).mockResolvedValue([{ insertedId: '5947b4e5-a87c-4d13-ad7e-d33f83a4cc3d' }]);
    (titlesRepository.getTitlesCount as any)
    .mockResolvedValueOnce(1)
    .mockResolvedValueOnce(1);

    await crawler.create('netflix');

    expect(titlesRepository.insertTitle).toHaveBeenCalledWith(expect.objectContaining({
      name: Datas.Title_HouseOfCards.name,
      imdbId: Datas.Title_tt1856010.imdbId
    }));
  });

  it("skip title found on wikipedia and in database", async () => {
    (wikiTitlesScraper.findTitles as any).mockResolvedValue([Datas.Title_HouseOfCards]);
    (titlesRepository.getTitles as any).mockResolvedValue([Datas.Title_tt1856010]);
    (titlesRepository.getTitlesCount as any)
    .mockResolvedValueOnce(1)
    .mockResolvedValueOnce(1);

    await crawler.create('netflix');

    expect(titlesRepository.insertTitle).not.toHaveBeenCalled();
  });
});