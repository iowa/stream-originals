import {
  InterestsRepository,
  Streamer,
  TitlePatchDto,
  TitlesMerger,
  TitlesPatchResponse,
  TitlesRepository
} from "@repo/common";
import { ImdbApiDevRestClient } from "../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../lib/source/imdbapidev/ImdbApiDevMapper.js";
import { CreditsRepository } from "@repo/common/credits/CreditsRepository";

export class TitlesPatcher {

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly imdbApiDevRestClient: ImdbApiDevRestClient = new ImdbApiDevRestClient(),
    private readonly imdbApiDevMapper: ImdbApiDevMapper = new ImdbApiDevMapper(),
    private readonly titlesMerger: TitlesMerger = new TitlesMerger(),
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
    private readonly creditsRepository: CreditsRepository = new CreditsRepository(),
  ) {
  }

  async patch(streamer: Streamer, timeout: number = 500): Promise<TitlesPatchResponse> {
    const response: TitlesPatchResponse = { items: [] };
    const titles: TitlePatchDto[] = await this.titlesRepository.getTitlePatchDtos(streamer);
    const interestsIds: Set<string> = await this.interestsRepository.getAllIds();
    const creditIds: Set<string> = await this.creditsRepository.getAllIds();
    const batchSize = 5;
    for (let i = 0; i < titles.length; i += batchSize) {
      const batch = titles.slice(i, i + batchSize);
      const imdbIds = batch.map(t => t.id!).filter(Boolean);
      if (imdbIds.length === 0) continue;
      const apiTitles = await this.imdbApiDevRestClient.getTitles(imdbIds);
      await new Promise(resolve => setTimeout(resolve, timeout));
      console.log(`Batch ${i}`)
      if (apiTitles.titles) {
        for (const apiTitle of apiTitles.titles) {
          if (apiTitle.id) {
            const title = this.findInTitles(batch, apiTitle.id);
            const updatedTitleDto = await this.imdbApiDevMapper.mapTitle(title, apiTitle, interestsIds, creditIds);
            await this.titlesMerger.merge(title, updatedTitleDto);
          }
        }
      }
    }
    return response;
  }

  private findInTitles(titles: TitlePatchDto[], imdbId: string): TitlePatchDto {
    const title = titles.find(t => t.id === imdbId);
    if (!title) {
      throw new Error(`Title with imdbId ${imdbId} not found`);
    }
    return title;
  }
}