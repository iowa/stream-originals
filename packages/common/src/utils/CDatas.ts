import { Title, TitleDraft } from "@repo/common";
import {
  Credit,
  Interest,
  TitleCredit,
  TitleImage,
  TitleInterest,
  TitleRating
} from "../db/dbTypes.js";

export class CDatas {

  public static readonly TitleDraft_HouseOfCards: TitleDraft = {
    id: "",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    finale: "2018-11-02"
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

  public static readonly Credit_nm0001226: Credit = {
    id: "nm0001226",
    name: "James Foley",
    primaryImageUrl: "https://m.media-amazon.com/images/M/MV5BMjI1MDQyMTAxNF5BMl5BanBnXkFtZTgwMjg0MTM2NjE@._V1_.jpg",
    primaryImageHeight: 548,
    primaryImageWidth: 362
  }

  public static readonly Credit_nm2802722: Credit = {
    id: "nm2802722",
    name: "Beau Willimon",
    primaryImageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2ODk3Mjg3Ml5BMl5BanBnXkFtZTcwNTQyMjQwOQ@@._V1_.jpg",
    primaryImageHeight: 1365,
    primaryImageWidth: 2048
  }

  public static readonly TitleCredit_tt1856010_nm0000228_star: TitleCredit = {
    titleId: CDatas.Title_tt1856010.id,
    creditId: CDatas.Credit_nm0000228.id,
    role: 'star'
  }

  public static readonly TitleCredit_tt1856010_nm0001226_director: TitleCredit = {
    titleId: CDatas.Title_tt1856010.id,
    creditId: CDatas.Credit_nm0001226.id,
    role: 'director'
  }

  public static readonly TitleCredit_tt1856010_nm2802722_writer: TitleCredit = {
    titleId: CDatas.Title_tt1856010.id,
    creditId: CDatas.Credit_nm2802722.id,
    role: 'writer'
  }


  public static readonly TitleRating_tt1856010_imdb: TitleRating = {
    titleId: CDatas.Title_tt1856010.id,
    type: 'imdb',
    total: "8.6",
    voteCount: 552661
  }

  public static readonly Interest_in0000076: Interest = {
    id: "in0000076",
    name: "Drama",
    isSubgenre: null,
    description: "The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistic and emotionally impactful way. Dramas delve into the complexities of human life, often exploring themes of love, loss, morality, societal issues, personal growth, with the aim to evoke an emotional response from the audience by presenting relatable and thought-provoking stories.",
    category: "Drama"
  }
  public static readonly TitleInterest_tt1856010_in0000076: TitleInterest = {
    titleId: "tt1856010",
    interestId: "in0000076"
  }


}