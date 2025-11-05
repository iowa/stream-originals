import axios, { type AxiosResponse } from "axios";
import { Times, TitleDraft } from "@repo/common";
import { ImdbMediaResponse, ImdbMediaTitle } from "./ImdbMediaTypes.js";

export class ImdbMediaRestClient {

  async findTitle(title: TitleDraft): Promise<ImdbMediaTitle | undefined> {
    const axiosInstance = axios.create({
      baseURL: "https://v3.sg.media-imdb.com",
    });
    const response: AxiosResponse<ImdbMediaResponse> = await axiosInstance.get(
      `/suggestion/x/${encodeURIComponent(title.name)}.json`,
    );
    return this.filterFindTitle(response.data, title);
  }

  filterFindTitle(data: ImdbMediaResponse, title: TitleDraft) {
    const titlesMatchingYears = this.filterOnYears(data, title);
    const titlesMatchingName = this.filterOnName(titlesMatchingYears, title);
    if (titlesMatchingName.length === 1) {
      return titlesMatchingName[0];
    }
    return undefined
  }

  private filterOnYears(data: ImdbMediaResponse, title: TitleDraft) {
    if (!title.premiere) return [];

    const titlePremiereYear = Times.asDayjs(title.premiere).year();

    if (!title.finale) {
      return data.d?.filter((t) => t.y === titlePremiereYear);
    }

    const titleFinaleYear = Times.asDayjs(title.finale).year();
    return data.d?.filter((t) => {
      if (t.yr) {
        const [apiPremiere, apiFinale] = t.yr.split("-").map(Number);
        return apiPremiere === titlePremiereYear && apiFinale === titleFinaleYear;
      }
    });
  }

  private filterOnName(
    titles: ImdbMediaTitle[],
    title: TitleDraft,
  ) {
    return titles.filter((t) => title.name === t.l);
  }

}
