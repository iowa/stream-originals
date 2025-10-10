import { z } from "zod";
import { streamerValues } from "../db/dbTypes.js";

export const TitlesStreamerResponseSchema = z.object({
  totalOnWebsite: z.number(),
  totalInDatabase: z.number(),
  totalWithImdbId: z.number(),
  streamer: z.enum(streamerValues),
});

export const TitlesPatchResponseSchema = z.object({
  items: z.array(TitlesStreamerResponseSchema),
});

export type TitlesStreamerResponse = z.infer<typeof TitlesStreamerResponseSchema>;

export type TitlesPatchResponse = z.infer<typeof TitlesPatchResponseSchema>;

