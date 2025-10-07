import axios, { type AxiosResponse } from "axios";
import dayjs from "dayjs";
import type { Title } from "@repo/common";
import { ImdbMediaResponse } from "./ImdbMediaTypes.js";

export class ImdbMediaTitles {
  static async findTitle(title: Title) {
    const axiosInstance = axios.create({
      baseURL: "https://v3.sg.media-imdb.com",
    });
    const response: AxiosResponse<ImdbMediaResponse> = await axiosInstance.get(
      `/suggestion/${encodeURIComponent(title.name[0])}/${encodeURIComponent(title.name)}.json`,
    );
    const matchWithStartYear = this.isMatchWithStartYear(response, title);
    if (matchWithStartYear) {
      return matchWithStartYear;
    }
    return this.isMatchWithName(response, title);
  }

  private static isMatchWithStartYear(
    response: AxiosResponse<ImdbMediaResponse>,
    title: Title,
  ) {
    const matches = response.data.d?.filter(
      (t) => dayjs(title.premiere).year() === t.y,
    );

    return matches?.[0];
  }

  private static isMatchWithName(
    response: AxiosResponse<ImdbMediaResponse>,
    title: Title,
  ) {
    const matches = response.data.d?.filter((t) => title.name === t.l);

    return matches?.[0];
  }
}
