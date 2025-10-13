import { Streamer, TitleDto, TitlesPatchResponse } from "@repo/common";
import { TitlesRepository } from "../repository/TitlesRepository.js";
import { ImdbApiDevRestClient } from "../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../lib/source/imdbapidev/ImdbApiDevMapper.js";

export class TitlesPatcher {
/*
  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly imdbApiDevRestClient: ImdbApiDevRestClient = new ImdbApiDevRestClient(),
    private readonly imdbApiDevMapper: ImdbApiDevMapper = new ImdbApiDevMapper(),
  ) {
  }

  async patch(streamer: Streamer): Promise<TitlesPatchResponse> {
    const response: TitlesPatchResponse = { items: [] };
    const dbTitles = await this.titlesRepository.getTitleDtos(streamer);
    if (dbTitles[0] && dbTitles[0].titles.imdbId) {
      const apiTitles = await this.imdbApiDevRestClient.getTitles([dbTitles[0].titles.imdbId]);
      if (apiTitles.titles) {
        for (const apiTitle of apiTitles.titles) {
          if (apiTitle.id) {
            let title = this.findInTitles(dbTitles, apiTitle.id);
            this.imdbApiDevMapper.mapTitle(title, apiTitle)
          }
        }
      }
    }
    return response;
  }

  private findInTitles(dbTitles: TitleDto[], imdbId: string): TitleDto {
    const title = dbTitles.find(t => t.titles.imdbId === imdbId);
    if (!title) {
      throw new Error(`Title with imdbId ${imdbId} not found`);
    }
    return title;
  }

 */
}