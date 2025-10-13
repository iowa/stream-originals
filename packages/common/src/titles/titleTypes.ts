import { z } from "zod";
import { streamerValues } from "../db/dbTypes.js";

export const TitlesCreateSchema = z.object({
  totalOnWebsite: z.number(),
  totalInDatabase: z.number(),
  totalWithImdbId: z.number(),
  streamer: z.enum(streamerValues),
});

export const TitlesCreateResponseSchema = z.object({
  items: z.array(TitlesCreateSchema),
});

export type TitlesCreate = z.infer<typeof TitlesCreateSchema>;

export type TitlesCreateResponse = z.infer<typeof TitlesCreateResponseSchema>;


export const TitlesPatchSchema = z.object({
  totalWithImdbId: z.number(),
  totalPatched: z.number(),
  failedIds: z.array(z.string()),
  streamer: z.enum(streamerValues),
});


export const TitlesPatchResponseSchema = z.object({
  items: z.array(TitlesPatchSchema),
});

export type TitlesPatch = z.infer<typeof TitlesPatchSchema>;

export type TitlesPatchResponse = z.infer<typeof TitlesPatchResponseSchema>;