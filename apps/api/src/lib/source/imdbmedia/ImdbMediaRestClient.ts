import axios, { type AxiosResponse } from "axios";
import { Times, Title } from "@repo/common";
import { ImdbMediaResponse, ImdbMediaTitle } from "./ImdbMediaTypes.js";

export class ImdbMediaRestClient {

  async findTitle(title: Title): Promise<ImdbMediaTitle | undefined> {
    const axiosInstance = axios.create({
      baseURL: "https://v3.sg.media-imdb.com",
    });
    const response: AxiosResponse<ImdbMediaResponse> = await axiosInstance.get(
      `/suggestion/x/${encodeURIComponent(title.name)}.json`,
    );
    const matchWithStartYear = this.isMatchWithStartYear(response, title);
    if (matchWithStartYear) {
      return matchWithStartYear;
    }
    return this.isMatchWithName(response, title);
  }

  private isMatchWithStartYear(
    response: AxiosResponse<ImdbMediaResponse>,
    title: Title,
  ) {
    const matches = response.data.d?.filter(
      (t) => Times.asDayjs(title.premiere).year() === t.y,
    );

    return matches?.[0];
  }

  private isMatchWithName(
    response: AxiosResponse<ImdbMediaResponse>,
    title: Title,
  ) {
    const matches = response.data.d?.filter((t) => title.name === t.l);

    return matches?.[0];
  }

}
