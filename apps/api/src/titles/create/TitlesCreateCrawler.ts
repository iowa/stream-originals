import * as cheerio from 'cheerio';
import {Streamer, Title, TitleDraft, TitlesRepository} from '@repo/common';
import {gotScraping} from 'crawlee';
import {WikiPageTitlesScraper} from '../../lib/source/wikipedia/WikiPageTitlesScraper.js';
import {ImdbRestClient} from '../../lib/source/imdb/ImdbRestClient.js';
import {ImdbMapper} from '../../lib/source/imdb/ImdbMapper.js';
import {ImdbTitle} from '../../lib/source/imdb/ImdbTypes.js';
import {TitlesCreate, TitlesCreateResponse} from '../titleTypes.js';

export class TitlesCreateCrawler {
  private readonly streamers: Map<Streamer, string[]> = new Map();

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly imdbMediaRestClient: ImdbRestClient = new ImdbRestClient(),
    private readonly imdbMediaMapper: ImdbMapper = new ImdbMapper(),
    private readonly wikiTitlesScraper: WikiPageTitlesScraper = new WikiPageTitlesScraper(),
  ) {
    this.streamers.set('appleTV+', [
      'https://en.wikipedia.org/wiki/List_of_Apple_TV%2B_original_programming',
    ]);
    this.streamers.set('netflix', [
      'https://en.wikipedia.org/wiki/List_of_Netflix_original_programming',
      'https://en.wikipedia.org/wiki/List_of_ended_Netflix_original_programming',
    ]);
    this.streamers.set('primeVideo', [
      'https://en.wikipedia.org/wiki/List_of_Amazon_Prime_Video_original_programming',
      'https://en.wikipedia.org/wiki/List_of_ended_Amazon_Prime_Video_original_programming',
    ]);
    this.streamers.set('disney+', [
      'https://en.wikipedia.org/wiki/List_of_Disney%2B_original_programming',
    ]);
    this.streamers.set('hboMax', [
      'https://en.wikipedia.org/wiki/List_of_HBO_original_programming',
      'https://en.wikipedia.org/wiki/List_of_HBO_Max_original_films',
      'https://en.wikipedia.org/wiki/List_of_HBO_Max_original_programming',
    ]);
  }

  async upsert(streamer: Streamer): Promise<TitlesCreateResponse> {
    const response: TitlesCreateResponse = {items: []};
    for (const url of this.streamers.get(streamer)?.values() || []) {
      response.items.push(await this.upsertTitles(streamer, url));
    }
    return response;
  }

  private async upsertTitles(
    streamer: Streamer,
    url: string,
  ): Promise<TitlesCreate> {
    const consoleLabel = `TitlesCreateCrawler-${streamer}-${url}`;
    console.log(consoleLabel);
    console.time(consoleLabel);
    const response = this.buildCreateResponse(url);
    const $ = await this.buildCheerio(url);
    const wikipediaTitles = (
      await this.wikiTitlesScraper.getTitles($, streamer)
    ).filter(title => !!title.premiere);
    response.totalOnWebsite = wikipediaTitles.length;

    const dbTitleDrafts = await this.titlesRepository.getDrafts(streamer);
    const dbTitles = await this.titlesRepository.get(streamer);

    await this.processTitles(wikipediaTitles, dbTitles, dbTitleDrafts);

    response.totalInDatabase = await this.titlesRepository.getCount(streamer);
    response.totalDraftsInDatabase =
      await this.titlesRepository.getDraftCount(streamer);

    console.log(response);
    console.timeEnd(consoleLabel);
    return response;
  }

  private async processTitles(
    wikipediaTitles: TitleDraft[],
    dbTitles: Title[],
    dbTitleDrafts: TitleDraft[],
  ): Promise<void> {
    let i: number = 0;
    for (const wikipediaTitle of wikipediaTitles) {
      if (i % 100 === 0) {
        console.log(`Processed ${i} of ${wikipediaTitles.length} titles`);
      }
      i++;
      let dbTitle = this.findInTitles(wikipediaTitle, dbTitles);
      if (dbTitle) {
        if (
          dbTitle.seasons != wikipediaTitle.seasons ||
          dbTitle.episodes != wikipediaTitle.episodes
        ) {
          await this.titlesRepository.updateTitle({
            ...dbTitle,
            seasons: wikipediaTitle.seasons,
            episodes: wikipediaTitle.episodes,
          });
        }
        continue;
      }

      const draftFound = this.findInTitleDrafts(wikipediaTitle, dbTitleDrafts);
      const imdbMediaTitle =
        await this.imdbMediaRestClient.findTitle(wikipediaTitle);

      if (draftFound && imdbMediaTitle) {
        await this.insertNewTitle(wikipediaTitle, imdbMediaTitle);
        await this.titlesRepository.deleteDraft(wikipediaTitle);
      } else if (imdbMediaTitle) {
        await this.insertNewTitle(wikipediaTitle, imdbMediaTitle);
      } else if (!draftFound) {
        await this.titlesRepository.insertDraft({
          ...wikipediaTitle,
          id: undefined,
        });
      }
    }
  }

  private async insertNewTitle(
    wikipediaTitle: TitleDraft,
    imdbMediaTitle: ImdbTitle,
  ): Promise<void> {
    const newTitle: Title = this.imdbMediaMapper.mapTitle(
      wikipediaTitle,
      imdbMediaTitle,
    );
    imdbMediaTitle?.qid
      ? await this.titlesRepository.insert(newTitle)
      : undefined;
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
    const {body} = await gotScraping({
      url: url,
    });
    return cheerio.load(body);
  }

  private findInTitles(title: TitleDraft, titles: Title[]): Title | undefined {
    return titles.find(
      t => t.name === title.name && t.premiere === title.premiere,
    );
  }

  private findInTitleDrafts(
    title: TitleDraft,
    dbTitleDrafts: TitleDraft[],
  ): TitleDraft | undefined {
    return dbTitleDrafts.find(
      t => t.name === title.name && t.premiere === title.premiere,
    );
  }
}
