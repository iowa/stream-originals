import type { InferSelectModel } from "drizzle-orm";
import { titlesMediaTable, titlesTable } from "./schema.js";

export type Title = InferSelectModel<typeof titlesTable>;
export const streamerValues = ["APPLE_PLUS", "NETFLIX"] as const;
export type Streamer = (typeof streamerValues)[number];

export const titleTypeValues = [
  "movie",
  "tvSeries",
  "tvMiniSeries",
  "tvSpecial",
  "tvMovie",
  "short",
  "video",
  "videoGame",
] as const;
export type TitleType = (typeof titleTypeValues)[number];

export const titlesMediaType = ["MAIN"] as const;
export type TitleMediaType = (typeof titlesMediaType)[number];

export type TitleMedia = InferSelectModel<typeof titlesMediaTable>;
