import { Streamer, Title, TitlesPatchResponse } from "@repo/common";
import { TitlesRepository } from "./repository/TitlesRepository.js";
import { TitlesCreateCrawler } from "./create/TitlesCreateCrawler.js";

export class TitlesService {
  getTitles(streamer: Streamer): Promise<Title[]> {
    return new TitlesRepository().getTitles(streamer);
  }

  create(): Promise<TitlesPatchResponse> {
    return new TitlesCreateCrawler().create();
  }
}
