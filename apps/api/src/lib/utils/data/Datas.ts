import { Title } from "@repo/common";
import { ImdbMediaTitle, ImdbMediaTitleImage } from "../../source/imdbmedia/ImdbMediaTypes.js";
import type { ImdbapiInterest } from "../../source/imdbapidev/generated/index.js";

export class Datas {

  public static readonly Title_HouseOfCards: Title = {
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    imdbId: null,
    imdbType: null
  } as Title;

  public static readonly Title_tt1856010: Title = {
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    imdbId: "tt1856010",
    imdbType: "tvSeries",
  } as Title;

  public static readonly ImdbMediaTitleImage_HouseOfCards: ImdbMediaTitleImage = {
    height: 2048,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
    width: 1382
  }

  public static readonly ImdbMediaTitle_HouseOfCards: ImdbMediaTitle = {
    i: this.ImdbMediaTitleImage_HouseOfCards,
    id: "tt1856010",
    l: "House of Cards",
    q: "TV series",
    qid: "tvSeries",
    y: 2013,
  }

  public static readonly ImdbapiInterest_in0000084: ImdbapiInterest = {
    id: "in0000084",
    name: "Political Drama",
    primaryImage: {
      "url": "https://m.media-amazon.com/images/M/MV5BYzc5ZTdmNmYtYTNkZC00MDRlLWI2ZDEtZmQzMTE0MzIwMjNjXkEyXkFqcGc@._V1_.jpg",
      "width": 3000,
      "height": 2001
    },
    description: "The political drama subgenre features the intricacies of political power, government institutions, political conflicts, and the individuals involved in the political process. These dramas often explore themes of ambition, corruption, ethical dilemmas, and the impact of political decisions on society and individuals.",
    isSubgenre: true
  }

}