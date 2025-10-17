import { TitleDto } from "../db/dbTypes.js";
import { InterestsRepository } from "../interests/InterestsRepository.js";
import { TitlesRepository } from "./TitlesRepository.js";
import { CreditsRepository } from "../credits/CreditsRepository.js";

export class TitlesMerger {

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
    private readonly creditsRepository: CreditsRepository = new CreditsRepository(),
  ) {
  }

  async merge(original: TitleDto, updated: TitleDto): Promise<void> {
    if (original.plot !== updated.plot) {
      await this.titlesRepository.update(original.id, updated)
    }
    await this.interestsRepository.refresh(original.id, original.interests, updated.interests)
    await this.creditsRepository.refresh(original.id, [{
      creditId: '88d3a8b9-92ed-43c6-af0d-1dc0dd82cf07',
      role: 'star'
    }])
  }

}