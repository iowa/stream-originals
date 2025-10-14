import { InterestsRepository, InteretsCreateResponse } from "@repo/common";
import { ImdbApiDevRestClient } from "../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../lib/source/imdbapidev/ImdbApiDevMapper.js";

export class InterestsService {

  constructor(
    private readonly imdbApiDevRestClient: ImdbApiDevRestClient = new ImdbApiDevRestClient(),
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
    private readonly imdbApiDevMapper: ImdbApiDevMapper = new ImdbApiDevMapper(),
  ) {

  }

  async create(): Promise<InteretsCreateResponse> {
    const response = this.buildCreateResponse();
    const apiResponse = await this.imdbApiDevRestClient.getInterests()
    const dbInterestsIds = await this.interestsRepository.getAllIds();
    if (apiResponse.categories) {
      for (const apiCategory of apiResponse.categories) {
        if (apiCategory.interests) {
          response.totalInApi += apiCategory.interests.length
          for (const apiInterest of apiCategory.interests) {
            if (apiInterest.id && !dbInterestsIds.includes(apiInterest.id)) {
              const interest = this.imdbApiDevMapper.mapInterest(apiCategory.category!, apiInterest);
              await this.interestsRepository.insert(interest);
            }
          }
        }
      }
    }
    response.totalInDatabase = await this.interestsRepository.getCount()
    return response
  }


  private buildCreateResponse(): InteretsCreateResponse {
    return {
      totalInDatabase: 0,
      totalInApi: 0,
    };
  }

}