import { Streamer, TitlesRepository } from "@repo/common";
import { query } from "@solidjs/router";

export const getTitlesList = query(async (streamer: Streamer) => {
  "use server";
  return new TitlesRepository().getWithRelations(streamer, 1, 10);
}, "getTitlesList");