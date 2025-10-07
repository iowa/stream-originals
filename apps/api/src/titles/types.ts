import { createInsertSchema } from "drizzle-zod";
import { titlesTable } from "@repo/common";

export const TitlesSchema = createInsertSchema(
  titlesTable as any,
);
