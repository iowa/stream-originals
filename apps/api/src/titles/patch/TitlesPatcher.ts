import { Streamer, Title, TitlesPatchResponse, TitlesRepository } from "@repo/common";
import { ImdbApiDevRestClient } from "../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../lib/source/imdbapidev/ImdbApiDevMapper.js";

export class TitlesPatcher {

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly imdbApiDevRestClient: ImdbApiDevRestClient = new ImdbApiDevRestClient(),
    private readonly imdbApiDevMapper: ImdbApiDevMapper = new ImdbApiDevMapper(),
  ) {
  }

  async patch(streamer: Streamer): Promise<TitlesPatchResponse> {
    const response: TitlesPatchResponse = { items: [] };
    const titles = await this.titlesRepository.getWithRelations(streamer);
    if (titles[0] && titles[0].imdbId) {
      const apiTitles = await this.imdbApiDevRestClient.getTitles([titles[0].imdbId]);
      if (apiTitles.titles) {
        for (const apiTitle of apiTitles.titles) {
          if (apiTitle.id) {
            let title = this.findInTitles(titles, apiTitle.id);
            this.imdbApiDevMapper.mapTitle(title, apiTitle)
          }
        }
      }
    }
    return response;
  }

  private findInTitles(titles: Title[], imdbId: string): Title {
    const title = titles.find(t => t.imdbId === imdbId);
    if (!title) {
      throw new Error(`Title with imdbId ${imdbId} not found`);
    }
    return title;
  }
}