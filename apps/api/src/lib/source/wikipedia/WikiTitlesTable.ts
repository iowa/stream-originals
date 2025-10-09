import * as cheerio from "cheerio";
import type { Title } from "@repo/common";
import { Times } from "@repo/common/utils/time/Times";

export class WikiTitlesTable {
  static parseRow(html: string) {
    const $ = cheerio.load(html, { xml: true });
    const cells = $("tr").first().find("td");
    return {
      name: this.getTitle($.html(cells.first())),
      premiere: this.getPremiere($.html(cells.eq(2))),
    } as Title;
  }

  private static getTitle(html: string): string {
    const $ = cheerio.load(html);
    $("sup").remove();
    return $.root().text().trim();
  }

  private static getPremiere(html: string): string | undefined {
    const $ = cheerio.load(html);
    $("sup").remove();
    const premiere = $.root().text().trim();
    return Times.format(premiere, Times._sqlDateFormat);
  }
}
