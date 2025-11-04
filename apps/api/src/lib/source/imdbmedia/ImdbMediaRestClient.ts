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
    const matchOnYears = this.isMatchOnYears(response, title);
    const matchWithName = this.isMatchWithName(response, title);
    return matchOnYears && matchWithName;
  }

  private isMatchOnYears(
    response: AxiosResponse<ImdbMediaResponse>,
    title: TitleDraft,
  ) {
    const titlePremiere = Times.asDayjs(title.premiere).year();
    if (!title.finale) {
      return response.data.d?.filter(
        (t) => Times.asDayjs(title.premiere).year() === t.y,
      )?.[0]
    }
    const titleFinale = Times.asDayjs(title.finale).year();
    const matches = response.data.d?.filter(
      (t) => {
        if (t.yr) {
          const apiPremiere = Number(t.yr.split("-")[0])
          const apiFinale = Number(t.yr.split("-")[1])
          return apiPremiere === titlePremiere && apiFinale === titleFinale;
        }
      },
    );
    return matches?.[0];
  }

  private isMatchWithName(
    response: AxiosResponse<ImdbMediaResponse>,
    title: TitleDraft,
  ) {
    const matches = response.data.d?.filter((t) => title.name === t.l);

    return matches?.[0];
  }

}
