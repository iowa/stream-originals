import type { Title, TitlesPatchResponse } from "@repo/common";
import { TitlesRepository } from "@repo/common/titles/TitlesRepository";
import { TitlesCrawlee } from "./TitlesCrawlee.js";

export class TitlesService {
  static async getTitles(): Promise<Title[]> {
    return TitlesRepository.getTitles();
  }

  static async crawleeTitles(): Promise<TitlesPatchResponse> {
    return TitlesCrawlee.patch();
  }
}
