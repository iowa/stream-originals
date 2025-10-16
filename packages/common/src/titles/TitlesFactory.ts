import { TitleDto } from "../db/dbTypes.js";
import { InterestsRepository } from "../interests/InterestsRepository.js";

export class TitlesFactory {

  constructor(
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
  ) {
  }

  async merge(original: TitleDto, updated: TitleDto): Promise<void> {
    await this.interestsRepository.refresh(original.id, original.interests, updated.interests)
  }

}