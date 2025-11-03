import * as cheerio from "cheerio";
import {
  Streamer,
  Title,
  TitleDraft,
  TitlesCreate,
  TitlesCreateResponse,
  TitlesRepository
} from "@repo/common";
import { gotScraping } from "crawlee";
import { WikiTitlesScraper } from "../../lib/source/wikipedia/WikiTitlesScraper.js";
import { ImdbMediaMapper } from "../../lib/source/imdbmedia/ImdbMediaMapper.js";
import { ImdbMediaRestClient } from "../../lib/source/imdbmedia/ImdbMediaRestClient.js";
import { ImdbMediaTitle } from "../../lib/source/imdbmedia/ImdbMediaTypes.js";

export class TitlesCreateCrawler {
  private readonly streamers: Map<Streamer, string[]> = new Map();

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly imdbMediaRestClient: ImdbMediaRestClient = new ImdbMediaRestClient(),
    private readonly imdbMediaMapper: ImdbMediaMapper = new ImdbMediaMapper(),
    private readonly wikiTitlesScraper: WikiTitlesScraper = new WikiTitlesScraper()
  ) {
    this.streamers.set('appleTV+', ["https://en.wikipedia.org/wiki/List_of_Apple_TV%2B_original_programming"]);
    this.streamers.set('netflix', [
      "https://en.wikipedia.org/wiki/List_of_Netflix_original_programming",
      "https://en.wikipedia.org/wiki/List_of_ended_Netflix_original_programming"
    ]);
  }

  async create(streamer: Streamer): Promise<TitlesCreateResponse> {
    const response: TitlesCreateResponse = { items: [] };
    for (const url of this.streamers.get(streamer)?.values() || []) {
      response.items.push(await this.patchStreamer(streamer, url));
    }
    return response;
  }

  private async patchStreamer(streamer: Streamer, url: string): Promise<TitlesCreate> {
    const response = this.buildCreateResponse(url);
    const $ = await this.buildCheerio(url);
    const wikipediaTitles = await this.wikiTitlesScraper.findTitles($, streamer);
    response.totalOnWebsite = wikipediaTitles.length;

    const dbTitleDrafts = await this.titlesRepository.getDrafts(streamer);
    const dbTitles = await this.titlesRepository.get(streamer);

    await this.processTitles(wikipediaTitles, dbTitles, dbTitleDrafts);

    response.totalInDatabase = await this.titlesRepository.getCount(streamer);
    response.totalDraftsInDatabase = await this.titlesRepository.getDraftCount(streamer);

    console.log(response);
    return response;
  }

  private async processTitles(wikipediaTitles: TitleDraft[], dbTitles: Title[], dbTitleDrafts: TitleDraft[]): Promise<void> {
    for (const wikipediaTitle of wikipediaTitles) {
      if (this.findInTitles(wikipediaTitle, dbTitles)) continue;

      const draftFound = this.findInTitleDrafts(wikipediaTitle, dbTitleDrafts);
      const imdbMediaTitle = await this.imdbMediaRestClient.findTitle(wikipediaTitle);

      if (draftFound && imdbMediaTitle) {
        await this.insertNewTitle(wikipediaTitle, imdbMediaTitle);
        await this.titlesRepository.deleteDraft(wikipediaTitle);
      } else if (imdbMediaTitle) {
        await this.insertNewTitle(wikipediaTitle, imdbMediaTitle);
      } else if (!draftFound) {
        await this.titlesRepository.insertDraft({ ...wikipediaTitle, id: undefined });
      }
    }
  }

  private async insertNewTitle(wikipediaTitle: TitleDraft, imdbMediaTitle: ImdbMediaTitle): Promise<void> {
    const newTitle: Title = this.imdbMediaMapper.mapTitle(wikipediaTitle, imdbMediaTitle);
    const insertedId = (imdbMediaTitle?.qid) ? await this.titlesRepository.insert(newTitle) : undefined;
    if (insertedId && imdbMediaTitle?.i) {
      const titleMedia = this.imdbMediaMapper.mapPoster(insertedId, imdbMediaTitle.i);
      await this.titlesRepository.insertImage(titleMedia);
    }
  }

  private buildCreateResponse(url: string): TitlesCreate {
    return {
      totalOnWebsite: 0,
      totalInDatabase: 0,
      totalDraftsInDatabase: 0,
      url: url,
    } as TitlesCreate;
  }

  private async buildCheerio(url: string): Promise<cheerio.CheerioAPI> {
    const { body } = await gotScraping({
      url: url,
    });
    return cheerio.load(body);
  }

  private findInTitles(title: TitleDraft, titles: Title[]): Title | undefined {
    return titles.find(t => t.name === title.name);
  }

  private findInTitleDrafts(title: TitleDraft, dbTitleDrafts: TitleDraft[]): TitleDraft | undefined {
    return dbTitleDrafts.find(t => t.name === title.name);
  }
}