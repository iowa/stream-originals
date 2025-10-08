import type { Title, TitlesPatchResponse } from "@repo/common";
import { TitlesCrawlee } from "./TitlesCrawlee.js";
import { TitlesRepository } from "./TitlesRepository.js";

export class TitlesService {
  static async getTitles(): Promise<Title[]> {
    return TitlesRepository.getTitles();
  }

  static async crawleeTitles(): Promise<TitlesPatchResponse> {
    return TitlesCrawlee.patch();
  }
}
