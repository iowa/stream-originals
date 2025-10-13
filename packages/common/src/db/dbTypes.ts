import type { InferSelectModel } from "drizzle-orm";
import { titleImagesTable, titlesTable } from "./schema.js";

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

export const titleImageTypeValues = ["poster"] as const;
export type TitleImageType = (typeof titleImageTypeValues)[number];

export type TitleImage = InferSelectModel<typeof titleImagesTable>;