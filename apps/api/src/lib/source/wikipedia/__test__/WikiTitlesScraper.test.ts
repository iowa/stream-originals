import { describe, expect, it } from "vitest";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import * as cheerio from "cheerio";
import { TestFiles } from "../../../utils/files/TestFiles.js";
import { WikiTitlesScraper } from "../WikiTitlesScraper.js";

describe("WikiTitlesScraper", () => {
  it("findTitles", async () => {
    const html = TestFiles.load(
      dirname(fileURLToPath(import.meta.url)),
      "/data/original_programming.html",
    );
    const $ = cheerio.load(html);
    const series = await WikiTitlesScraper.findTitles($, "appleTV+");

    expect(series).toMatchSnapshot("applePlus_titles.html");
  });
});
