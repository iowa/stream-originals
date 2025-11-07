import { TestTitle } from "./TestEntities.js";
import { TestInterests } from "./TestInterests.js";
import { TestCredits } from "./TestCredits.js";
import { TitleDraft } from "../../db/dbTypes.js";

export class TestTitleStrangerThings {

  public static readonly TitleDraft: TitleDraft = {
    id: "",
    name: "Stranger Things",
    premiere: "2016-07-15",
    streamer: "netflix",
    finale: null,
    seasons: 5,
    episodes: 42
  };

  public static readonly TestTitle: TestTitle = {
    title: {
      ...TestTitleStrangerThings.TitleDraft,
      id: "tt4574334",
      type: "tvSeries",
      plot: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
      updatedAt: new Date("1970-01-01T00:00:00.000Z"),
      runtimeSeconds: 3200,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2NjY4MF5BMl5BanBnXkFtZTgwNjI4OTYzOTE@._V1_.jpg"
    },
    ratings: [{
      titleId: "tt4574334",
      type: "imdb",
      total: "8.6",
      voteCount: 1498843
    }],
    interests: [
      TestInterests.Drama,
      TestInterests.Fantasy,
      TestInterests.Horror,
      TestInterests.SciFi,
      TestInterests.Mystery,
      TestInterests.Thriller
    ],
    credits: [{
      ...TestCredits.Winona_Ryder,
      role: "star"
    }]
  }

}
