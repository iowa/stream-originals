import { db, Streamer, titlesMediaTable, titlesTable } from "@repo/common";
import { eq } from "drizzle-orm";
import { query } from "@solidjs/router";

export const getTitlesList = query(async (streamer: Streamer) => {
  "use server";
  return db
  .select()
  .from(titlesTable)
  .leftJoin(
    titlesMediaTable,
    eq(titlesMediaTable.titleId, titlesTable.id)
  )
  .where(eq(titlesTable.streamer, streamer))
  .limit(10);
}, "getTitlesList");