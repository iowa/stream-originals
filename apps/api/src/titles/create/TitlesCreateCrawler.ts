import * as cheerio from "cheerio";
import { Streamer, Title, TitlesPatchResponse, TitlesStreamerResponse } from "@repo/common";
import { gotScraping } from "crawlee";
import { WikiTitlesScraper } from "../../lib/source/wikipedia/WikiTitlesScraper.js";
import { ImdbMediaMapper } from "../../lib/source/imdbmedia/ImdbMediaMapper.js";
import { ImdbMediaRestClient } from "../../lib/source/imdbmedia/ImdbMediaRestClient.js";
import { TitlesRepository } from "../repository/TitlesRepository.js";
import { TitlesMediaRepository } from "../repository/TitlesMediaRepository.js";

export class TitlesCreateCrawler {
  private readonly streamers: Map<Streamer, string> = new Map();

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly titlesMediaRepository: TitlesMediaRepository = new TitlesMediaRepository(),
    private readonly imdbMediaRestClient: ImdbMediaRestClient = new ImdbMediaRestClient(),
    private readonly imdbMediaMapper: ImdbMediaMapper = new ImdbMediaMapper(),
    private readonly wikiTitlesScraper: WikiTitlesScraper = new WikiTitlesScraper()
  ) {
    this.streamers.set('appleTV+', "https://en.wikipedia.org/wiki/List_of_Apple_TV%2B_original_programming");
    this.streamers.set('netflix', "https://en.wikipedia.org/wiki/List_of_Netflix_original_programming");
  }

  async create(streamer?: Streamer): Promise<TitlesPatchResponse> {
    const response: TitlesPatchResponse = { items: [] };
    const streamers = streamer ? [streamer] : ['appleTV+'] as Streamer[];

    for (const s of streamers) {
      response.items.push(await this.patchStreamer(s));
    }

    return response;
  }

  private async patchStreamer(streamer: Streamer): Promise<TitlesStreamerResponse> {
    const response: TitlesStreamerResponse = this.buildStreamerResponse(streamer);
    const $ = await this.buildCheerio(this.streamers.get(streamer)!);
    const wikipediaTitles = await this.wikiTitlesScraper.findTitles($, streamer);
    response.totalOnWebsite = wikipediaTitles.length;
    const dbTitles = await this.titlesRepository.getTitles(streamer);
    for (const wikipediaTitle of wikipediaTitles) {
      const titleFound = this.findInTitles(wikipediaTitle, dbTitles);
      if (!titleFound?.imdbId) {
        const imdbMediaTitle = await this.imdbMediaRestClient.findTitle(wikipediaTitle);
        const newTitle = this.imdbMediaMapper.mapTitle(wikipediaTitle, imdbMediaTitle);
        const insertedId = await this.titlesRepository.insertTitle(newTitle);
        if (imdbMediaTitle?.i) {
          const titleMedia = this.imdbMediaMapper.mapPoster(insertedId[0].insertedId, imdbMediaTitle.i);
          await this.titlesMediaRepository.insert(titleMedia)
        }
      }
    }
    response.totalInDatabase = await this.titlesRepository.getTitlesCount(streamer);
    response.totalWithImdbId = await this.titlesRepository.getTitlesCount(
      streamer,
      true,
    );
    console.log(response);
    return response;
  }

  private buildStreamerResponse(streamer: string) {
    return {
      totalOnWebsite: 0,
      totalInDatabase: 0,
      totalWithImdbId: 0,
      streamer: streamer,
    } as TitlesStreamerResponse;
  }

  private async buildCheerio(url: string): Promise<cheerio.CheerioAPI> {
    const { body } = await gotScraping({
      url: url,
    });
    return cheerio.load(body);
  }

  private findInTitles(title: Title, titles: Title[]) {
    return titles.find(t => t.name === title.name);
  }
}