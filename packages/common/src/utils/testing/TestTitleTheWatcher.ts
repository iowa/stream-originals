import { TestTitle } from "./TestEntities.js";
import { TestInterests } from "./TestInterests.js";
import { TitleDraft } from "../../db/dbTypes.js";

export class TestTitleTheWatcher {
  public static readonly TitleDraft: TitleDraft = {
    id: "",
    name: "The Watcher",
    premiere: "2022-10-13",
    streamer: "netflix",
    finale: null,
    seasons: 1,
    episodes: 7
  };

  public static readonly TestTitle: TestTitle = {
    title: {
      ...TestTitleTheWatcher.TitleDraft,
      id: "tt14852808",
      type: "tvSeries",
      plot: "A married couple moving into their dream home are threatened by terrifying letters from a stalker, signed - \"The Watcher.\".",
      updatedAt: new Date("1970-01-01T00:00:00.000Z"),
      runtimeSeconds: 0,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BOTRhNjhhMTEtY2U4Ni00Mzc4LTkwNzgtYmFmYmUzYWJkNzVmXkEyXkFqcGc@._V1_.jpg"
    },
    ratings: [
      {
        titleId: "tt14852808",
        type: "imdb",
        total: "6.5",
        voteCount: 90666
      }
    ],
    interests: [TestInterests.Drama, TestInterests.Horror, TestInterests.Mystery, TestInterests.Thriller],
    credits: []
  }
}