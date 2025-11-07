import { TestTitle } from "./TestEntities.js";
import { TestInterests } from "./TestInterests.js";
import { TestCredits } from "./TestCredits.js";
import { TitleDraft } from "../../db/dbTypes.js";
import { TitlePatchDto } from "../../dto/dtoTypes.js";

export class TestTitleHouseOfCards {

  public static readonly TitleDraft: TitleDraft = {
    id: "",
    name: "House of Cards",
    premiere: "2013-02-01",
    streamer: "netflix",
    finale: "2018-11-02",
    seasons: 6,
    episodes: 73
  };

  public static readonly TestTitle: TestTitle = {
    title: {
      ...TestTitleHouseOfCards.TitleDraft,
      id: "tt1856010",
      type: "tvSeries",
      plot: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
      updatedAt: new Date("1970-01-01T00:00:00.000Z"),
      runtimeSeconds: 3000,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg'
    },
    ratings: [{
      titleId: 'tt1856010',
      type: 'imdb',
      total: "8.6",
      voteCount: 552661
    }],
    interests: [TestInterests.Drama, TestInterests.Thriller],
    credits: [{
      ...TestCredits.Kevin_Spacey,
      role: 'star'
    }, {
      ...TestCredits.James_Foley,
      role: 'director'
    }, {
      ...TestCredits.Beau_Willimon,
      role: 'writer'
    }]
  }

  public static readonly TitlePatchDto: TitlePatchDto = {
    ...TestTitleHouseOfCards.TestTitle.title,
    interests: [],
    stars: [],
    directors: [],
    writers: [],
    ratings: []
  }
}
