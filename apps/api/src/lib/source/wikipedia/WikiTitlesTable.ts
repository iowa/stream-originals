import * as cheerio from "cheerio";
import { Times, TitleDraft } from "@repo/common";
import { WikiParseRow } from "./wikipediaTypes.js";

export class WikiTitlesTable {
  parseRow(params: WikiParseRow): TitleDraft | null {
    if (params.titleIndex === undefined || params.premiereIndex === undefined) {
      return null
    }
    const $ = cheerio.load(params.html, { xml: true });
    const cells = $("tr").first().find("td");

    cells.each((i, el) => {
      if ($(el).attr("colspan") === "2") {
        if (params.premiereIndex && i <= params.premiereIndex) {
          if (params.finaleIndex) {
            params.finaleIndex--;
          }
          if (params.seasonsIndex) {
            params.seasonsIndex--;
          }
        }
      }
    });

    let seasonsEpisodes = undefined
    if (params.seasonsIndex) {
      seasonsEpisodes = this.getSeasonsEpisodes($.html(cells.eq(params.seasonsIndex)));
    }

    return {
      id: "",
      streamer: params.streamer,
      name: this.getTitle($.html(cells.eq(params.titleIndex))),
      premiere: this.getDate($.html(cells.eq(params.premiereIndex))) || null,
      finale: (params.finaleIndex) ? this.getDate($.html(cells.eq(params.finaleIndex))) || null : null,
      seasons: seasonsEpisodes?.seasons || null,
      episodes: seasonsEpisodes?.episodes || null,
    };
  }

  private getTitle(html: string): string {
    const $ = cheerio.load(html);
    $("sup").remove();
    return $.root().text().trim();
  }

  private getDate(html: string): string | undefined {
    const $ = cheerio.load(html);
    $("sup").remove();
    const date = $.root().text().trim();
    return Times.format(date, Times._sqlDateFormat);
  }

  private getSeasonsEpisodes(input: string): { seasons: number, episodes: number } {
    const seasonsMatch = input.match(/(\d+)\s*seasons?/i);
    const episodesMatch = input.match(/(\d+)\s*episodes?/i);
    return {
      seasons: seasonsMatch ? parseInt(seasonsMatch[1], 10) : 0,
      episodes: episodesMatch ? parseInt(episodesMatch[1], 10) : 0
    };
  }

}
