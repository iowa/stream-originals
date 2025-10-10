import { Streamer, Title, TitlesPatchResponse } from "@repo/common";
import { TitlesRepository } from "./repository/TitlesRepository.js";
import { TitlesCreateCrawler } from "./create/TitlesCreateCrawler.js";

export class TitlesService {
  static async getTitles(streamer: Streamer): Promise<Title[]> {
    return TitlesRepository.getTitles(streamer);
  }

  static async create(): Promise<TitlesPatchResponse> {
    return TitlesCreateCrawler.create();
  }
}
