import { Title, TitleDraft } from "@repo/common";
import { Credit, TitleCredit, TitleImage } from "../db/dbTypes.js";

export class CDatas {

  public static readonly TitleDraft_HouseOfCards: TitleDraft = {
    id: "",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
  };

  public static readonly Title_tt1856010: Title = {
    id: "tt1856010",
    type: "tvSeries",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    plot: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
    updatedAt: new Date("1970-01-01T00:00:00.000Z"),
    runtimeSeconds: 3000
  };

  public static readonly TitleImage_tt1856010_poster: TitleImage = {
    id: "cb8fcac8-e826-4f91-9cb6-e78641168274",
    titleId: "tt1856010",
    url: "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
    height: 2048,
    width: 1382,
    type: "poster"
  }

  public static readonly Credit_nm0000228: Credit = {
    id: "nm0000228",
    name: "Kevin Spacey",
    primaryImageUrl: "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
    primaryImageHeight: 1800,
    primaryImageWidth: 1471
  }

  public static readonly TitleCredit_tt1856010_nm0000228: TitleCredit = {
    titleId: CDatas.Title_tt1856010.id,
    creditId: CDatas.Credit_nm0000228.id,
    role: 'star'
  }

}