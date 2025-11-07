import { TestTitle } from "./TestEntities.js";
import { TestInterests } from "./TestInterests.js";
import { TitleDraft } from "../../db/dbTypes.js";

export class TestTitlesTheQueensGambit {
  public static readonly TitleDraft: TitleDraft = {
    id: "",
    name: "The Queen's Gambit",
    premiere: "2020-10-23",
    streamer: "netflix",
    finale: "2020-10-23",
    seasons: null,
    episodes: 7
  };

  public static readonly TestTitle: TestTitle = {
    title: {
      ...TestTitlesTheQueensGambit.TitleDraft,
      id: "tt10048342",
      type: "tvMiniSeries",
      plot: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
      updatedAt: new Date("2025-11-06T18:55:48.919Z"),
      runtimeSeconds: 3600,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMmRlNjQxNWQtMjk1OS00N2QxLTk0YWQtMzRhYjY5YTFhNjMxXkEyXkFqcGc@._V1_.jpg"
    },
    ratings: [
      {
        titleId: "tt10048342",
        type: "imdb",
        total: "8.5",
        voteCount: 638917
      }
    ],
    interests: [TestInterests.Drama],
    credits: []
  }
}
