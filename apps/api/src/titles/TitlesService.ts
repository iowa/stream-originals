import {
  TitlesCreateResponse,
  TitlesGetCountsResponse,
  TitlesPatchResponse,
} from "./titleTypes.js";
import { TitlesCreateCrawler } from "./create/TitlesCreateCrawler.js";
import { TitlesPatcher } from "./patch/TitlesPatcher.js";
import { Streamer, TitlesRepository } from "@repo/common";

export class TitlesService {

  async getCounts(): Promise<TitlesGetCountsResponse> {
    return (await new TitlesRepository().getCounts()).reduce((acc, { streamer, count }) => {
      acc[streamer as keyof TitlesGetCountsResponse] = count;
      return acc;
    }, {} as TitlesGetCountsResponse);
  }

  create(streamer: Streamer): Promise<TitlesCreateResponse> {
    return new TitlesCreateCrawler().upsert(streamer);
  }

  patch(streamer: Streamer): Promise<TitlesPatchResponse> {
    return new TitlesPatcher().patch(streamer);
  }

}
