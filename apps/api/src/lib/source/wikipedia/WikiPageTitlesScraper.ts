import * as cheerio from "cheerio";
import { CheerioAPI } from "cheerio";
import type { Streamer, TitleDraft } from "@repo/common";
import { WikiTitlesTable } from "./WikiTitlesTable.js";

export class WikiPageTitlesScraper {

  constructor(
    private readonly wikiTitlesTable: WikiTitlesTable = new WikiTitlesTable(),
  ) {
  }

  async getTitles(
    $: cheerio.CheerioAPI,
    streamer: Streamer,
  ): Promise<TitleDraft[]> {
    const titles: TitleDraft[] = [];
    this.getCurrentTitles($, titles, streamer);
    this.getEndedTitles($, titles, streamer);
    return titles;
  }

  private getCurrentTitles($: CheerioAPI, titles: TitleDraft[], streamer: Streamer) {
    $("table").each((_, table) => {
      const tableHeaders = $(table).find("th");
      if (
        tableHeaders.first().text().trim() === "Title" &&
        (tableHeaders.eq(2).text().trim() === "Premiere" ||
          tableHeaders.eq(2).text().trim() === "Release") &&
        tableHeaders.eq(3).text().trim() === "Seasons"
      ) {
        $(table)
        .find("tbody tr:has(td)")
        .each((_, row) => {
          const title = this.wikiTitlesTable.parseRow(cheerio.load(row).html(), streamer);
          titles.push(title);
        });
      }
    });
  }

  private getEndedTitles($: CheerioAPI, titles: TitleDraft[], streamer: Streamer) {
    $("table").each((_, table) => {
      const tableHeaders = $(table).find("th");
      if (
        tableHeaders.first().text().trim() === "Title" &&
        (tableHeaders.eq(2).text().trim() === "Premiere" ||
          tableHeaders.eq(2).text().trim() === "Release") &&
        tableHeaders.eq(3).text().trim() === "Finale"
      ) {
        $(table)
        .find("tbody tr:has(td)")
        .each((_, row) => {
          const title = this.wikiTitlesTable.parseEndedRow(cheerio.load(row).html(), streamer);
          titles.push(title);
        });
      }
    });
  }
}
