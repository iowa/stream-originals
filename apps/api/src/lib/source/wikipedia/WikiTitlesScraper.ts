import * as cheerio from "cheerio";
import type { Streamer, Title, TitleDraft } from "@repo/common";
import { WikiTitlesTable } from "./WikiTitlesTable.js";

export class WikiTitlesScraper {

  constructor(
    private readonly wikiTitlesTable: WikiTitlesTable = new WikiTitlesTable(),
  ) {

  }

  async findTitles(
    $: cheerio.CheerioAPI,
    streamer: Streamer,
  ): Promise<TitleDraft[]> {
    const titles: TitleDraft[] = [];
    $("table").each((_, table) => {
      const tableHeaders = $(table).find("th");
      if (
        tableHeaders.first().text().trim() === "Title" &&
        (tableHeaders.eq(2).text().trim() === "Premiere" ||
          tableHeaders.eq(2).text().trim() === "Release")
      ) {
        $(table)
        .find("tbody tr:has(td)")
        .each((_, row) => {
          const title = this.wikiTitlesTable.parseRow(cheerio.load(row).html());
          titles.push({
            ...title,
            streamer: streamer,
          });
        });
      }
    });
    return titles;
  }
}
