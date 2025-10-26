import { Streamer, TitlesRepository } from "@repo/common";
import { query } from "@solidjs/router";

export const getTitlesList = query(async (streamer: Streamer) => {
  "use server";
  return new TitlesRepository().geTitleListDtos(streamer, 1, 100);
}, "getTitlesList");

export const getTitle = query(async (titleId: string) => {
  "use server";
  return new TitlesRepository().getTitleDto(titleId);
}, "getTitlesList");