import {
  Streamer,
  TitleDto,
  TitlesFactory,
  TitlesPatchResponse,
  TitlesRepository
} from "@repo/common";
import { ImdbApiDevRestClient } from "../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../lib/source/imdbapidev/ImdbApiDevMapper.js";

export class TitlesPatcher {

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly imdbApiDevRestClient: ImdbApiDevRestClient = new ImdbApiDevRestClient(),
    private readonly imdbApiDevMapper: ImdbApiDevMapper = new ImdbApiDevMapper(),
    private readonly titlesFactory: TitlesFactory = new TitlesFactory(),
  ) {
  }

  async patch(streamer: Streamer): Promise<TitlesPatchResponse> {
    const response: TitlesPatchResponse = { items: [] };
    const titles: TitleDto[] = await this.titlesRepository.getWithRelations(streamer);
    const batchSize = 5;
    for (let i = 0; i < titles.length; i += batchSize) {
      const batch = titles.slice(i, i + batchSize);
      const imdbIds = batch.map(t => t.imdbId!).filter(Boolean);
      if (imdbIds.length === 0) continue;
      const apiTitles = await this.imdbApiDevRestClient.getTitles(imdbIds);
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(`Batch ${i}`)
      if (apiTitles.titles) {
        for (const apiTitle of apiTitles.titles) {
          if (apiTitle.id) {
            let title = this.findInTitles(batch, apiTitle.id);
            let updatedTitleDto = this.imdbApiDevMapper.mapTitle(title, apiTitle);
            await this.titlesFactory.merge(title, updatedTitleDto);
          }
        }
      }
    }
    return response;
  }

  private findInTitles(titles: TitleDto[], imdbId: string): TitleDto {
    const title = titles.find(t => t.imdbId === imdbId);
    if (!title) {
      throw new Error(`Title with imdbId ${imdbId} not found`);
    }
    return title;
  }
}