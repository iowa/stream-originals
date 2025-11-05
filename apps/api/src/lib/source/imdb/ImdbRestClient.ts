import axios, { type AxiosResponse } from "axios";
import { Times, TitleDraft } from "@repo/common";
import { ImdbResponse, ImdbTitle } from "./ImdbTypes.js";

export class ImdbRestClient {

  async findTitle(title: TitleDraft): Promise<ImdbTitle | undefined> {
    const axiosInstance = axios.create({
      baseURL: "https://v3.sg.media-imdb.com",
    });
    const response: AxiosResponse<ImdbResponse> = await axiosInstance.get(
      `/suggestion/x/${encodeURIComponent(title.name)}.json`,
    );
    return this.filterFindTitle(response.data, title);
  }

  filterFindTitle(data: ImdbResponse, title: TitleDraft) {
    const titlesMatchingYears = this.filterOnYears(data, title);
    const titlesMatchingName = this.filterOnName(titlesMatchingYears, title);
    if (titlesMatchingName.length > 0) {
      return titlesMatchingName[0];
    }
    if (titlesMatchingYears.length > 0) {
      return titlesMatchingYears[0];
    }
    return undefined
  }

  private filterOnYears(data: ImdbResponse, title: TitleDraft) {
    if (!title.premiere) return [];

    const titlePremiereYear = Times.asDayjs(title.premiere).year();
    const titleFinaleYear = title.finale ? Times.asDayjs(title.finale).year() : null;

    const titlesMatchingY = data.d?.filter((t) => {
      if (t.yr && titleFinaleYear) {
        const [apiPremiere, apiFinale] = t.yr.split("-").map(Number);
        return apiPremiere === titlePremiereYear && apiFinale === titleFinaleYear;
      }
      return false;
    });

    return titlesMatchingY?.length ? titlesMatchingY : data.d?.filter((t) => t.y === titlePremiereYear);
  }

  private filterOnName(
    titles: ImdbTitle[],
    title: TitleDraft,
  ) {
    return titles.filter((t) => title.name === t.l);
  }

}
