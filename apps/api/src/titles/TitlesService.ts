import {
  Streamer,
  Title,
  TitlesCreateResponse,
  TitlesPatchResponse,
  TitlesRepository
} from "@repo/common";
import { TitlesCreateCrawler } from "./create/TitlesCreateCrawler.js";
import { TitlesPatcher } from "./patch/TitlesPatcher.js";

export class TitlesService {
  getTitles(streamer: Streamer): Promise<Title[]> {
    return new TitlesRepository().get(streamer);
  }

  create(): Promise<TitlesCreateResponse> {
    return new TitlesCreateCrawler().create();
  }

  patch(): Promise<TitlesPatchResponse> {
    return new TitlesPatcher().patch('appleTV+');
  }

}
