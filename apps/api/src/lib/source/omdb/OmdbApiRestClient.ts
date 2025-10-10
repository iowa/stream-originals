import axios, { type AxiosResponse } from "axios";
import "dotenv/config";

export class OmdbApiRestClient {

  static async findTitle(imdbId: string) {
    const axiosInstance = axios.create({
      baseURL: "https://www.omdbapi.com/",
    });
    const response: AxiosResponse = await axiosInstance.get(
      `/?i=${imdbId}&apikey=` + process.env.OMDB_API_KEY,
    );
    return response.data
  }

}
