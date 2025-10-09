import { db, Streamer, titlesTable } from "@repo/common";
import { eq } from "drizzle-orm";
import { query } from "@solidjs/router";

export const getTitlesList = query(async (streamer: Streamer) => {
  "use server";
  return db
  .select()
  .from(titlesTable)
  .where(eq(titlesTable.streamer, streamer))
  .limit(1);
}, "getTitlesList");