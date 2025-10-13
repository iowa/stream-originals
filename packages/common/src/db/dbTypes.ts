import type { InferSelectModel } from "drizzle-orm";
import { interests, titlesMediaTable, titlesTable } from "./schema.js";

export type Title = InferSelectModel<typeof titlesTable>;

export const streamerValues = ["appleTV+", "netflix"] as const;
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

export const titlesMediaType = ["poster"] as const;
export type TitleMediaType = (typeof titlesMediaType)[number];

export type TitleMedia = InferSelectModel<typeof titlesMediaTable>;

export type Tnterest = InferSelectModel<typeof interests>