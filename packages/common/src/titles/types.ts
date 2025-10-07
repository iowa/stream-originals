import { z } from "zod";
import { streamerValues } from "../db/dbTypes";

export const TitlesCrawleeResponseSchema = z.object({
  totalOnWebsite: z.number(),
  totalInDatabase: z.number(),
  totalWithImdbId: z.number(),
  streamer: z.enum(streamerValues),
});

export const TitlesPatchResponseSchema = z.object({
  items: z.array(TitlesCrawleeResponseSchema),
});

export type TitlesCrawleeResponse = z.infer<typeof TitlesCrawleeResponseSchema>;

export type TitlesPatchResponse = z.infer<typeof TitlesPatchResponseSchema>;
