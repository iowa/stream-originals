import * as cheerio from "cheerio";
import {
  Streamer,
  Title,
  TitleMedia,
  TitlesCrawleeResponse,
  TitlesPatchResponse,
} from "@repo/common";
import { WikiTitlesScraper } from "../lib/source/wikipedia/WikiTitlesScraper.js";
import { ImdbMediaTitles } from "../lib/source/imdbmedia/ImdbMediaTitles.js";
import { ImdbMapper } from "../lib/source/imdb/ImdbMapper.js";
import { gotScraping } from "crawlee";
import { TitlesMediaRepository } from "./TitlesMediaRepository.js";
import { TitlesRepository } from "./TitlesRepository.js";

export class TitlesCrawlee {
  private static readonly APPLE_PLUS_URL =
    "https://en.wikipedia.org/wiki/List_of_Apple_TV%2B_original_programming";

  static async patch(): Promise<TitlesPatchResponse> {
    const response: TitlesPatchResponse = {
      items: [],
    };
    response.items.push(
      await TitlesCrawlee.patchStreamer(this.APPLE_PLUS_URL, "APPLE_PLUS"),
    );
    /*
    response.items.push(
      await TitlesCrawlee.patchStreamer(
        "https://en.wikipedia.org/wiki/List_of_Netflix_original_programming",
        "NETFLIX",
      ),
    );
     */
    return response;
  }

  private static async patchStreamer(url: string, streamer: Streamer) {
    const response: TitlesCrawleeResponse = {
      totalOnWebsite: 0,
      totalInDatabase: 0,
      totalWithImdbId: 0,
      streamer: streamer,
    };
    const { body } = await gotScraping({
      url: url,
    });
    const $ = cheerio.load(body);
    const titles = await WikiTitlesScraper.findTitles($, streamer);
    response.totalOnWebsite = titles.length;
    for (const title of titles) {
      const tileInDB = await TitlesRepository.findUnique(title.name, streamer);
      if (!tileInDB?.imdbId) {
        const imdbResponse = await TitlesCrawlee.mapImdbData(title);
        const insertedId = await TitlesRepository.insertTitle(title);
        if (imdbResponse?.i) {
          await TitlesMediaRepository.insert({
            titleId: insertedId[0].insertedId,
            url: imdbResponse?.i.imageUrl,
            width: imdbResponse?.i.width,
            height: imdbResponse?.i.height,
            type: "MAIN",
          } as TitleMedia);
        }
      }
    }
    response.totalInDatabase = await TitlesRepository.getTitlesCount(streamer);
    response.totalWithImdbId = await TitlesRepository.getTitlesCount(
      streamer,
      true,
    );
    console.log(response);
    return response;
  }

  private static async mapImdbData(title: Title) {
    const r = await ImdbMediaTitles.findTitle(title);
    if (!r) {
      return undefined;
    }
    title.imdbId = r.id ?? null;
    title.imdbType = ImdbMapper.mapType(r.qid) ?? null;
    return r;
  }
}
