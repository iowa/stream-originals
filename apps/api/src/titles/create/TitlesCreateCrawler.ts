import * as cheerio from "cheerio";
import { Streamer, Title, TitlesPatchResponse, TitlesStreamerResponse } from "@repo/common";
import { gotScraping } from "crawlee";
import { WikiTitlesScraper } from "../../lib/source/wikipedia/WikiTitlesScraper.js";
import { ImdbMediaMapper } from "../../lib/source/imdbmedia/ImdbMediaMapper.js";
import { ImdbMediaRestClient } from "../../lib/source/imdbmedia/ImdbMediaRestClient.js";
import { TitlesRepository } from "../repository/TitlesRepository.js";
import { TitlesMediaRepository } from "../repository/TitlesMediaRepository.js";

export class TitlesCreateCrawler {

  private static readonly streamers: Map<Streamer, string> = new Map();
  static {
    this.streamers.set('appleTV+', "https://en.wikipedia.org/wiki/List_of_Apple_TV%2B_original_programming");
    this.streamers.set('netflix', "https://en.wikipedia.org/wiki/List_of_Netflix_original_programming");
  }

  static async create(streamer?: Streamer): Promise<TitlesPatchResponse> {
    const response: TitlesPatchResponse = { items: [] };
    const streamers = streamer ? [streamer] : ['appleTV+'] as Streamer[];

    for (const s of streamers) {
      response.items.push(await this.patchStreamer(s));
    }

    return response;
  }

  private static async patchStreamer(streamer: Streamer): Promise<TitlesStreamerResponse> {
    const response: TitlesStreamerResponse = this.buildStreamerResponse(streamer);
    const $ = await this.buildCheerio(this.streamers.get(streamer)!);
    const wikipediaTitles = await WikiTitlesScraper.findTitles($, streamer);
    response.totalOnWebsite = wikipediaTitles.length;
    const dbTitles = await TitlesRepository.getTitles(streamer);
    for (const wikipediaTitle of wikipediaTitles) {
      const titleFound = this.findInTitles(wikipediaTitle, dbTitles);
      if (!titleFound?.imdbId) {
        const imdbMediaTitle = await ImdbMediaRestClient.findTitle(wikipediaTitle);
        const newTitle = ImdbMediaMapper.mapTitle(wikipediaTitle, imdbMediaTitle);
        const insertedId = await TitlesRepository.insertTitle(newTitle);
        if (imdbMediaTitle?.i) {
          const titleMedia = ImdbMediaMapper.mapPoster(insertedId[0].insertedId, imdbMediaTitle.i);
          await TitlesMediaRepository.insert(titleMedia)
        }
      }
    }
    response.totalInDatabase = await TitlesRepository.getTitlesCount(streamer);
    response.totalWithImdbId = await TitlesRepository.getTitlesCount(
      streamer,
      true,
    );
    console.log(response);
    return response;
  }

  private static buildStreamerResponse(streamer: string) {
    return {
      totalOnWebsite: 0,
      totalInDatabase: 0,
      totalWithImdbId: 0,
      streamer: streamer,
    } as TitlesStreamerResponse;
  }

  private static async buildCheerio(url: string): Promise<cheerio.CheerioAPI> {
    const { body } = await gotScraping({
      url: url,
    });
    return cheerio.load(body);
  }

  private static findInTitles(title: Title, titles: Title[]) {
    return titles.find(t => t.name === title.name);
  }
}