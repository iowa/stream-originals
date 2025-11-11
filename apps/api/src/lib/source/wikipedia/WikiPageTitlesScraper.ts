import * as cheerio from 'cheerio';
import {CheerioAPI} from 'cheerio';
import type {Streamer, TitleDraft} from '@repo/common';
import {WikiTitlesTable} from './WikiTitlesTable.js';
import {WikiParseRow} from './wikipediaTypes.js';

export class WikiPageTitlesScraper {
  constructor(
    private readonly wikiTitlesTable: WikiTitlesTable = new WikiTitlesTable(),
  ) {}

  async getTitles(
    $: cheerio.CheerioAPI,
    streamer: Streamer,
  ): Promise<TitleDraft[]> {
    const titles: TitleDraft[] = [];
    this.getCurrentTitles($, titles, streamer);
    return titles;
  }

  private getCurrentTitles(
    $: CheerioAPI,
    titles: TitleDraft[],
    streamer: Streamer,
  ) {
    $('table').each((_, table) => {
      const tableHeaders = $(table).find('th');
      const indices: WikiParseRow = {
        html: '',
        streamer: streamer,
      };

      tableHeaders.each((i, tableHeader) => {
        let headerText = $(tableHeader).text().trim();
        if (headerText === 'Title') {
          indices.titleIndex = i;
        }
        if (
          headerText === 'Premiere' ||
          headerText === 'Release' ||
          headerText === 'Release date' ||
          headerText === 'First broadcast'
        ) {
          indices.premiereIndex = i;
        }
        if (headerText === 'Finale' || headerText === 'Last broadcast') {
          indices.finaleIndex = i;
        }
        if (headerText === 'Seasons') {
          indices.seasonsIndex = i;
        }
      });
      if (
        indices.titleIndex !== undefined &&
        indices.premiereIndex !== undefined
      ) {
        $(table)
          .find('tbody tr:has(td)')
          .each((_, row) => {
            const title = this.wikiTitlesTable.parseRow({
              ...indices,
              html: cheerio.load(row).html(),
            });
            if (title) {
              titles.push(title);
            }
          });
      }
    });
  }
}
