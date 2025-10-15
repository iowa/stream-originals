import { TitleDto } from "../db/dbTypes.js";
import { TitlesRepository } from "./TitlesRepository.js";
import { InterestsRepository } from "../interests/InterestsRepository.js";

export class TitlesFactory {

  constructor(
    private readonly titlesRepository: TitlesRepository = new TitlesRepository(),
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
  ) {
  }

  async insert(titleDto: TitleDto) {
    await this.titlesRepository.insert(titleDto);
    for (const interest of titleDto.interests) {
      await this.interestsRepository.insert(interest)
    }
    return titleDto;
  }

  async merge(original: TitleDto, updated: TitleDto): Promise<void> {
    await this.interestsRepository.refresh(original.id, original.interests, updated.interests)
  }

}