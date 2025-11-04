import {
  Streamer,
  TitlesCreateResponse,
  TitlesGetCountsResponse,
  TitlesPatchResponse,
  TitlesRepository
} from "@repo/common";
import { TitlesCreateCrawler } from "./create/TitlesCreateCrawler.js";
import { TitlesPatcher } from "./patch/TitlesPatcher.js";

export class TitlesService {

  getCounts(): Promise<TitlesGetCountsResponse> {
    return new TitlesRepository().getCounts();
  }

  create(streamer: Streamer): Promise<TitlesCreateResponse> {
    return new TitlesCreateCrawler().upsert(streamer);
  }

  patch(streamer: Streamer): Promise<TitlesPatchResponse> {
    return new TitlesPatcher().patch(streamer);
  }

}
