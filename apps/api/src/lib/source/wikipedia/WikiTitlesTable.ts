import * as cheerio from "cheerio";
import { Streamer, Times, TitleDraft } from "@repo/common";

export class WikiTitlesTable {
  parseRow(html: string, streamer: Streamer): TitleDraft {
    const $ = cheerio.load(html, { xml: true });
    const cells = $("tr").first().find("td");
    return {
      id: "",
      streamer: streamer,
      name: this.getTitle($.html(cells.first())),
      premiere: this.getDate($.html(cells.eq(2))) || null,
      finale: null
    };
  }

  parseEndedRow(html: string, streamer: Streamer): TitleDraft {
    const $ = cheerio.load(html, { xml: true });
    const cells = $("tr").first().find("td");
    let premiereIdx = 2;
    let finaleIdx = 3;

    cells.each((i, el) => {
      if ($(el).attr("colspan") === "2") {
        if (i <= premiereIdx) {
          finaleIdx--;
        }
      }
    });

    return {
      id: "",
      streamer: streamer,
      name: this.getTitle($.html(cells.first())),
      premiere: this.getDate($.html(cells.eq(premiereIdx))) || null,
      finale: this.getDate($.html(cells.eq(finaleIdx))) || null,
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

}
