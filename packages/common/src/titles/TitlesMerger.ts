import { TitleDto } from "../db/dbTypes.js";
import { InterestsRepository } from "../interests/InterestsRepository.js";
import { TitlesRepository } from "./TitlesRepository.js";

export class TitlesMerger {

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
  ) {
  }

  async merge(original: TitleDto, updated: TitleDto): Promise<void> {
    if (original.plot !== updated.plot) {
      await this.titlesRepository.update(original.id, updated)
    }
    await this.interestsRepository.refresh(original.id, original.interests, updated.interests)
  }

}