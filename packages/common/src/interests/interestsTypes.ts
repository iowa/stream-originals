import { z } from "zod";

export const InteretsCreateResponseSchema = z.object({
  totalInDatabase: z.number(),
  totalInApi: z.number()
});

export type InteretsCreateResponse = z.infer<typeof InteretsCreateResponseSchema>;