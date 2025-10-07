import * as cheerio from "cheerio";
import type { Streamer, Title } from "@repo/common";
import { WikiTitlesTable } from "./WikiTitlesTable.js";

export class WikiTitlesScraper {
  static async findTitles(
    $: cheerio.CheerioAPI,
    streamer: Streamer,
  ): Promise<Title[]> {
    const titles: Title[] = [];
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
            const title = WikiTitlesTable.parseRow(cheerio.load(row).html());
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
