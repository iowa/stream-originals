import type { Title, TitlesPatchResponse } from "@repo/common";
import { TitlesRepository } from "@repo/common/titles/TitlesRepository";

export class TitlesService {
  static async getTitles(): Promise<Title[]> {
    return TitlesRepository.getTitles();
  }

  static async crawleeTitles(): Promise<TitlesPatchResponse> {
    return { items: [] };
  }
}
