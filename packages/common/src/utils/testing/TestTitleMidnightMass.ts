import { TestTitle } from "./TestEntities.js";
import { TestInterests } from "./TestInterests.js";
import { TitleDraft } from "../../db/dbTypes.js";

export class TestTitleMidnightMass {
  public static readonly TitleDraft: TitleDraft = {
    id: "",
    name: "Midnight Mass",
    premiere: "2021-09-24",
    streamer: "netflix",
    finale: "2021-09-24",
    seasons: null,
    episodes: 7
  };

  public static readonly TestTitle: TestTitle = {
    title: {
      ...TestTitleMidnightMass.TitleDraft,
      id: "tt10574558",
      type: "tvMiniSeries",
      plot: "An isolated island community experiences miraculous events - and frightening omens - after the arrival of a charismatic, mysterious young priest.",
      updatedAt: new Date("2025-11-06T18:55:59.337Z"),
      runtimeSeconds: 3600,
      imageUrl: "https://m.media-amazon.com/images/M/MV5BYWFjMDM5MzgtZWI3OC00ZWRmLThlNTktN2ZkMTc3ZTA5NGEzXkEyXkFqcGc@._V1_.jpg"
    },
    ratings: [
      {
        titleId: "tt10574558",
        type: "imdb",
        total: "7.7",
        voteCount: 163618
      }
    ],
    interests: [TestInterests.Drama, TestInterests.Fantasy, TestInterests.Horror, TestInterests.Mystery],
    credits: []
  }
}