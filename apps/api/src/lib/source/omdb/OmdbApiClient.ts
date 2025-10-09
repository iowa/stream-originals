import axios, { type AxiosResponse } from "axios";
import { ImdbMediaResponse } from "../imdbmedia/ImdbMediaTypes.js";

export class OmdbApiClient {

  static async findTitle() {
    const axiosInstance = axios.create({
      baseURL: "https://www.omdbapi.com/",
    });
    const response: AxiosResponse<ImdbMediaResponse> = await axiosInstance.get(
      `/?i=tt3896198&apikey=3ced4b59`,
    );
    return response.data
  }

}
