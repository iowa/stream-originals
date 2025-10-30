import { z } from "zod";
import { streamerValues } from "../db/dbTypes.js";

export const TitlesGetCountsResponseSchema = z.record(z.enum(streamerValues), z.number());

export type TitlesGetCountsResponse = z.infer<typeof TitlesGetCountsResponseSchema>;

export const TitlesCreateSchema = z.object({
  totalOnWebsite: z.number(),
  totalInDatabase: z.number(),
  totalDraftsInDatabase: z.number(),
  url: z.string(),
});

export const TitlesCreateResponseSchema = z.object({
  items: z.array(TitlesCreateSchema),
});

export type TitlesCreate = z.infer<typeof TitlesCreateSchema>;

export type TitlesCreateResponse = z.infer<typeof TitlesCreateResponseSchema>;


export const TitlesPatchSchema = z.object({
  totalInDatabase: z.number(),
  totalPatched: z.number(),
  failedIds: z.array(z.string()),
  streamer: z.enum(streamerValues),
});


export const TitlesPatchResponseSchema = z.object({
  items: z.array(TitlesPatchSchema),
});

export const TitlesPatchRequestSchema = z.object({
  streamer: z.enum(streamerValues),
})

export type TitlesPatch = z.infer<typeof TitlesPatchSchema>;

export type TitlesPatchResponse = z.infer<typeof TitlesPatchResponseSchema>;

export type TitlesPatchRequest = z.infer<typeof TitlesPatchRequestSchema>