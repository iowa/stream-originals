import { Streamer, TitlesRepository } from "@repo/common";
import { query } from "@solidjs/router";

export const getTitlesList = query(async (streamer: Streamer) => {
  "use server";
  return new TitlesRepository().getTitleListDto(streamer, 1, 100);
}, "getTitlesList");