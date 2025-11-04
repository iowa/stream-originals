import { describe, expect, it } from "vitest";
import * as cheerio from "cheerio";
import { WikiPageTitlesScraper } from "../WikiPageTitlesScraper.js";
import { TestFiles } from "@repo/common";

describe("WikiPageTitlesScraper", () => {
  it("getTitles", async () => {
    const html = TestFiles.load(
      __dirname,
      "/data/original_programming.html",
    );
    const $ = cheerio.load(html);
    const series = await new WikiPageTitlesScraper().getTitles($, "appleTV+");

    expect(series).toMatchSnapshot("applePlus_titles.html");
  });
});
