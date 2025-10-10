import "dotenv/config";
import { Configuration, TitleApi } from "./generated/index.js";

export class ImdbApiDevRestClient {

  static async getTitles(imdbIds: string[]) {
    const api = new TitleApi(this.getConfiguration())
    const response = await api.iMDbAPIServiceBatchGetTitles(imdbIds);
    return response.data
  }

  private static getConfiguration() {
    return new Configuration({ basePath: "https://api.imdbapi.dev" });
  }
}
