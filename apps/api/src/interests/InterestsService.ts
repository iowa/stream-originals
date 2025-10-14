import { InterestsRepository, InteretsCreateResponse } from "@repo/common";
import { ImdbApiDevRestClient } from "../lib/source/imdbapidev/ImdbApiDevRestClient.js";

export class InterestsService {

  constructor(
    private readonly imdbApiDevRestClient: ImdbApiDevRestClient = new ImdbApiDevRestClient(),
    private readonly interestsRepository: InterestsRepository = new InterestsRepository(),
  ) {

  }

  async create(): Promise<InteretsCreateResponse> {
    const response = this.buildCreateResponse();
    const apiResponse = await this.imdbApiDevRestClient.getInterests()
    const interestsIds = this.interestsRepository.getAllIds();
    if (apiResponse.categories) {
      response.totalInApi = apiResponse.categories.length
      for (const apiInterest of apiResponse.categories) {

      }
    }
    response.totalInDatabase = await this.interestsRepository.getCount()

    return response
  }


  private buildCreateResponse(): InteretsCreateResponse {
    return {
      totalInDatabase: 0,
      totalInApi: 0,
      newRecords: 0
    };
  }

}