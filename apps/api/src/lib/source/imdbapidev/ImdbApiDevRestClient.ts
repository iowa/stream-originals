import "dotenv/config";
import {
  Configuration,
  ImdbapiBatchGetTitlesResponse,
  ImdbapiListListInterestCategoriesResponse,
  InterestApi,
  TitleApi
} from "./generated/index.js";

export class ImdbApiDevRestClient {

  async getTitles(imdbIds: string[]): Promise<ImdbapiBatchGetTitlesResponse> {
    const api = new TitleApi(this.getConfiguration())
    const response = await api.iMDbAPIServiceBatchGetTitles(imdbIds);
    return response.data
  }

  async getInterests(): Promise<ImdbapiListListInterestCategoriesResponse> {
    const api = new InterestApi(this.getConfiguration());
    const response = await api.iMDbAPIServiceListInterestCategories();
    return response.data;
  }

  private getConfiguration() {
    return new Configuration({ basePath: "https://api.imdbapi.dev" });
  }

}
