import { beforeEach, describe, expect, it, vi } from "vitest";
import { Datas } from "../../../lib/utils/data/Datas.js";
import { WikiTitlesScraper } from "../../../lib/source/wikipedia/WikiTitlesScraper.js";
import { TitlesCreateCrawler } from "../TitlesCreateCrawler.js";
import { TitlesRepository } from "../../repository/TitlesRepository.js";
import { ImdbMediaRestClient } from "../../../lib/source/imdbmedia/ImdbMediaRestClient.js";
import { TitlesMediaRepository } from "../../repository/TitlesMediaRepository.js";

vi.mock('../../lib/source/wikipedia/WikiTitlesScraper');
vi.mock('../repository/TitlesRepository');
vi.mock('../../lib/source/imdbmedia/ImdbMediaRestClient');
vi.mock('../repository/TitlesMediaRepository')

describe("TitlesCreateCrawler", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("create title found on wikipedia but not in database", async () => {

    WikiTitlesScraper.findTitles = vi.fn().mockResolvedValue([Datas.Title_HouseOfCards]);
    TitlesRepository.getTitles = vi.fn().mockResolvedValue([]);
    ImdbMediaRestClient.findTitle = vi.fn().mockResolvedValue(Datas.ImdbMediaTitle_HouseOfCards);
    TitlesRepository.insertTitle = vi.fn().mockResolvedValue(['bdcb16f7-f273-4a15-aeae-8953bbe322b9']);
    TitlesMediaRepository.insert = vi.fn().mockResolvedValue(['5947b4e5-a87c-4d13-ad7e-d33f83a4cc3d']);
    TitlesRepository.getTitlesCount = vi.fn()
    .mockResolvedValueOnce(1)
    .mockResolvedValueOnce(1);

    await TitlesCreateCrawler.create('netflix')

    expect(TitlesRepository.insertTitle).toHaveBeenCalledWith(expect.objectContaining({
      name: Datas.Title_HouseOfCards.name,
      imdbId: Datas.Title_tt1856010.imdbId
    }));
  })

  it("skip title found on wikipedia and in database", async () => {
    WikiTitlesScraper.findTitles = vi.fn().mockResolvedValue([Datas.Title_HouseOfCards]);
    TitlesRepository.getTitles = vi.fn().mockResolvedValue([Datas.Title_tt1856010]);
    TitlesRepository.getTitlesCount = vi.fn()
    .mockResolvedValueOnce(1)
    .mockResolvedValueOnce(1);

    await TitlesCreateCrawler.create('netflix')

    expect(TitlesRepository.insertTitle).not.toHaveBeenCalled();
  });

});
