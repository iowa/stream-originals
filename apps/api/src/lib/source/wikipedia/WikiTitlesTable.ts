import * as cheerio from "cheerio";
import { Times, TitleDraft } from "@repo/common";

export class WikiTitlesTable {
  parseRow(html: string): TitleDraft {
    const $ = cheerio.load(html, { xml: true });
    const cells = $("tr").first().find("td");
    return {
      name: this.getTitle($.html(cells.first())),
      premiere: this.getPremiere($.html(cells.eq(2))),
    } as TitleDraft;
  }

  private getTitle(html: string): string {
    const $ = cheerio.load(html);
    $("sup").remove();
    return $.root().text().trim();
  }

  private getPremiere(html: string): string | undefined {
    const $ = cheerio.load(html);
    $("sup").remove();
    const premiere = $.root().text().trim();
    return Times.format(premiere, Times._sqlDateFormat);
  }
}
