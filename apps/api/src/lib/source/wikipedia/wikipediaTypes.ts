import { Streamer } from "@repo/common";

export type WikiParseRow = {
  html: string;
  streamer: Streamer;
  titleIndex?: number;
  premiereIndex?: number;
  finaleIndex?: number;
  seasonsIndex?: number;
};