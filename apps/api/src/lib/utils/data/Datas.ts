import { Title } from "@repo/common";
import { ImdbMediaTitle, ImdbMediaTitleImage } from "../../source/imdbmedia/ImdbMediaTypes.js";

export class Datas {

  public static readonly Title_HouseOfCards: Title = {
    id: "",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    imdbId: null,
    imdbType: null
  };

  public static readonly Title_tt1856010: Title = {
    id: "",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    imdbId: "tt1856010",
    imdbType: "tvSeries",
  };

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

}