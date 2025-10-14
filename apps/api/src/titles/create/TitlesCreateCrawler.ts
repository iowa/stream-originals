import * as cheerio from "cheerio";
import {
  TitlesCreateResponse,
  Streamer,
  Title,
  TitlesCreate,
  TitlesRepository, TitleImagesRepository
} from "@repo/common";
import { gotScraping } from "crawlee";
import { WikiTitlesScraper } from "../../lib/source/wikipedia/WikiTitlesScraper.js";
import { ImdbMediaMapper } from "../../lib/source/imdbmedia/ImdbMediaMapper.js";
import { ImdbMediaRestClient } from "../../lib/source/imdbmedia/ImdbMediaRestClient.js";

export class TitlesCreateCrawler {
  private readonly streamers: Map<Streamer, string> = new Map();

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly titlesMediaRepository: TitleImagesRepository = new TitleImagesRepository(),
    private readonly imdbMediaRestClient: ImdbMediaRestClient = new ImdbMediaRestClient(),
    private readonly imdbMediaMapper: ImdbMediaMapper = new ImdbMediaMapper(),
    private readonly wikiTitlesScraper: WikiTitlesScraper = new WikiTitlesScraper()
  ) {
    this.streamers.set('appleTV+', "https://en.wikipedia.org/wiki/List_of_Apple_TV%2B_original_programming");
    this.streamers.set('netflix', "https://en.wikipedia.org/wiki/List_of_Netflix_original_programming");
  }

  async create(streamer?: Streamer): Promise<TitlesCreateResponse> {
    const response: TitlesCreateResponse = { items: [] };
    const streamers = streamer ? [streamer] : ['appleTV+'] as Streamer[];

    for (const s of streamers) {
      response.items.push(await this.patchStreamer(s));
    }

    return response;
  }

  private async patchStreamer(streamer: Streamer): Promise<TitlesCreate> {
    const response = this.buildCreateResponse(streamer);
    const $ = await this.fetchAndParseHtml(streamer);
    const wikipediaTitles = await this.wikiTitlesScraper.findTitles($, streamer);
    response.totalOnWebsite = wikipediaTitles.length;

    const dbTitles = await this.titlesRepository.get(streamer);

    await this.processTitles(wikipediaTitles, dbTitles, streamer);

    response.totalInDatabase = await this.titlesRepository.getCount(streamer);
    response.totalWithImdbId = await this.titlesRepository.getCount(streamer, true);

    console.log(response);
    return response;
  }

  private async fetchAndParseHtml(streamer: Streamer): Promise<cheerio.CheerioAPI> {
    const url = this.streamers.get(streamer)!;
    return this.buildCheerio(url);
  }

  private async processTitles(wikipediaTitles: Title[], dbTitles: Title[], streamer: Streamer): Promise<void> {
    for (const wikipediaTitle of wikipediaTitles) {
      const titleFound = this.findInTitles(wikipediaTitle, dbTitles);
      if (!titleFound?.imdbId) {
        await this.insertNewTitle(wikipediaTitle);
      }
    }
  }

  private async insertNewTitle(wikipediaTitle: Title): Promise<void> {
    const imdbMediaTitle = await this.imdbMediaRestClient.findTitle(wikipediaTitle);
    const newTitle = this.imdbMediaMapper.mapTitle(wikipediaTitle, imdbMediaTitle);
    const [insertedId] = await this.titlesRepository.insert(newTitle);

    if (imdbMediaTitle?.i) {
      const titleMedia = this.imdbMediaMapper.mapPoster(insertedId.insertedId, imdbMediaTitle.i);
      await this.titlesMediaRepository.insert(titleMedia);
    }
  }

  private buildCreateResponse(streamer: string) {
    return {
      totalOnWebsite: 0,
      totalInDatabase: 0,
      totalWithImdbId: 0,
      streamer: streamer,
    } as TitlesCreate;
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