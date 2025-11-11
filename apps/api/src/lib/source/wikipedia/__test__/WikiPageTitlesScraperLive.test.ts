import {describe, expect, it} from 'vitest';
import * as cheerio from 'cheerio';
import {WikiPageTitlesScraper} from '../WikiPageTitlesScraper.js';
import {TestFiles} from '@repo/common';
import {gotScraping} from 'crawlee';

describe('WikiPageTitlesScraperLive', () => {
  it('getTitles gotScraping', async () => {
    const {body} = await gotScraping({
      url: 'https://en.wikipedia.org/wiki/List_of_HBO_original_programming',
    });
    const $ = cheerio.load(body);
    const series = await new WikiPageTitlesScraper().getTitles($, 'hboMax');

    expect(series).toMatchSnapshot('original_titles.html');
  });
});
