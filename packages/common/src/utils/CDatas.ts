import { Title, TitleDraft } from "@repo/common";
import {
  Credit,
  Interest,
  TitleCredit,
  TitleInterest,
  TitleRating
} from "../db/dbTypes.js";
import { TitlePatchDto } from "../dto/dtoTypes.js";

export class CDatas {

  public static readonly TitleDraft_HouseOfCards: TitleDraft = {
    id: "",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    finale: "2018-11-02",
    seasons: 6,
    episodes: 73
  };

  public static readonly Title_tt1856010: Title = {
    ...CDatas.TitleDraft_HouseOfCards,
    id: "tt1856010",
    type: "tvSeries",
    plot: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
    updatedAt: new Date("1970-01-01T00:00:00.000Z"),
    runtimeSeconds: 3000,
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg'
  };

  public static readonly Title_tt4574334: Title = {
    id: "tt4574334",
    name: "Stranger Things",
    streamer: "netflix",
    premiere: "2016-07-15",
    finale: null,
    seasons: 4,
    episodes: 34,
    type: "tvSeries",
    plot: null,
    updatedAt: null,
    runtimeSeconds: null,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjRiMTA4NWUtNmE0ZC00NGM0LWJhMDUtZWIzMDM5ZDIzNTg3XkEyXkFqcGc@._V1_.jpg",
  }

  public static readonly Title_tt14852808: Title = {
    id: "tt14852808",
    name: "The Watcher",
    streamer: "netflix",
    premiere: "2022-10-13",
    finale: null,
    seasons: 1,
    episodes: 7,
    type: "tvSeries",
    plot: null,
    updatedAt: null,
    runtimeSeconds: null,
    imageUrl: "https://m.media-amazon.com/images/M/MV5BOTRhNjhhMTEtY2U4Ni00Mzc4LTkwNzgtYmFmYmUzYWJkNzVmXkEyXkFqcGc@._V1_.jpg",
  }

  public static readonly TitlePatchDto_tt1856010: TitlePatchDto = {
    ...CDatas.Title_tt1856010,
    interests: [],
    stars: [],
    directors: [],
    writers: [],
    ratings: []
  }

  public static readonly Credit_nm0000228: Credit = {
    id: "nm0000228",
    name: "Kevin Spacey",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
  }

  public static readonly Credit_nm0001226: Credit = {
    id: "nm0001226",
    name: "James Foley",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjI1MDQyMTAxNF5BMl5BanBnXkFtZTgwMjg0MTM2NjE@._V1_.jpg"
  }

  public static readonly Credit_nm2802722: Credit = {
    id: "nm2802722",
    name: "Beau Willimon",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2ODk3Mjg3Ml5BMl5BanBnXkFtZTcwNTQyMjQwOQ@@._V1_.jpg"
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