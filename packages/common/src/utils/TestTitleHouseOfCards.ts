import { TestTitle } from "./TestEntities.js";
import { Credit, Interest, TitleDraft } from "../db/dbTypes.js";
import { TitlePatchDto } from "../dto/dtoTypes.js";

export class TestTitleHouseOfCards {
  public static readonly Interest_Drama: Interest = {
    id: "in0000076",
    name: "Drama",
    isSubgenre: null,
    description: "The drama genre is a broad category that features stories portraying human experiences, emotions, conflicts, and relationships in a realistic and emotionally impactful way. Dramas delve into the complexities of human life, often exploring themes of love, loss, morality, societal issues, personal growth, with the aim to evoke an emotional response from the audience by presenting relatable and thought-provoking stories.",
    category: "Drama"
  }

  public static readonly Credit_Kevin_Spacey: Credit = {
    id: "nm0000228",
    name: "Kevin Spacey",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
  }

  public static readonly Credit_James_Foley: Credit = {
    id: "nm0001226",
    name: "James Foley",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMjI1MDQyMTAxNF5BMl5BanBnXkFtZTgwMjg0MTM2NjE@._V1_.jpg"
  }

  public static readonly Credit_Beau_Willimon: Credit = {
    id: "nm2802722",
    name: "Beau Willimon",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2ODk3Mjg3Ml5BMl5BanBnXkFtZTcwNTQyMjQwOQ@@._V1_.jpg"
  }

  public static readonly TitleDraft_HouseOfCards: TitleDraft = {
    id: "",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    finale: "2018-11-02",
    seasons: 6,
    episodes: 73
  };

  public static readonly TestTitle_House_of_Cards: TestTitle = {
    title: {
      ...TestTitleHouseOfCards.TitleDraft_HouseOfCards,
      id: "tt1856010",
      type: "tvSeries",
      plot: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
      updatedAt: new Date("1970-01-01T00:00:00.000Z"),
      runtimeSeconds: 3000,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg'
    },
    interests: [TestTitleHouseOfCards.Interest_Drama],
    titleInterests: [{
      titleId: "tt1856010",
      interestId: TestTitleHouseOfCards.Interest_Drama.id
    }],
    credits: [TestTitleHouseOfCards.Credit_Kevin_Spacey, TestTitleHouseOfCards.Credit_James_Foley, TestTitleHouseOfCards.Credit_Beau_Willimon],
    titleRatings: [{
      titleId: 'tt1856010',
      type: 'imdb',
      total: "8.6",
      voteCount: 552661
    }],
    titleCredits: [{
      titleId: 'tt1856010',
      creditId: TestTitleHouseOfCards.Credit_Kevin_Spacey.id,
      role: 'star'
    }, {
      titleId: 'tt1856010',
      creditId: TestTitleHouseOfCards.Credit_James_Foley.id,
      role: 'director'
    }, {
      titleId: 'tt1856010',
      creditId: TestTitleHouseOfCards.Credit_Beau_Willimon.id,
      role: 'writer'
    }]
  }

  public static readonly TitlePatchDto_House_of_Cards: TitlePatchDto = {
    ...TestTitleHouseOfCards.TestTitle_House_of_Cards.title,
    interests: [],
    stars: [],
    directors: [],
    writers: [],
    ratings: []
  }
}
