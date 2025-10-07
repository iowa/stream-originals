import type { Title, TitlesPatchResponse } from "@repo/common";

export class TitlesService {
  static async getTitles(): Promise<Title[]> {
    return []
  }

  static async crawleeTitles(): Promise<TitlesPatchResponse> {
    return { items: [] };
  }
}
