import { describe, expect, it } from "vitest";
import * as cheerio from "cheerio";
import { WikiTitlesScraper } from "../WikiTitlesScraper.js";
import { TestFiles } from "@repo/common";

describe("WikiTitlesScraper", () => {
  it("findTitles", async () => {
    const html = TestFiles.load(
      __dirname,
      "/data/original_programming.html",
    );
    const $ = cheerio.load(html);
    const series = await new WikiTitlesScraper().findTitles($, "appleTV+");

    expect(series).toMatchSnapshot("applePlus_titles.html");
  });
});
