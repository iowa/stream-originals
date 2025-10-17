import type { InferSelectModel } from "drizzle-orm";
import {
  creditsTable,
  interestsTable,
  titleCreditsTable,
  titleImagesTable,
  titlesTable
} from "./schema.js";

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

export type Interest = InferSelectModel<typeof interestsTable>;

export const creditRoleValues = ["star", "writer", "director"] as const;
export type CreditRole = (typeof creditRoleValues)[number];
export type Credit = InferSelectModel<typeof creditsTable>;
export type CreditWithRole = Credit & { credit: { role: CreditRole } };
export type TitleCredit = InferSelectModel<typeof titleCreditsTable>;

export type TitleDto = Title & {
  images: TitleImage[],
  interests: Interest[],
  credits: CreditWithRole[]
}