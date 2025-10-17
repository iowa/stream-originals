import { defineRelations } from "drizzle-orm";
import * as schema from "./schema.js";

export const relations = defineRelations(schema, (r) => ({
  titlesTable: {
    images: r.many.titleImagesTable(),
    interests: r.many.interestsTable(),
    credits: r.many.creditsTable(),
  },
  titleImagesTable: {
    title: r.one.titlesTable({
      from: r.titleImagesTable.titleId,
      to: r.titlesTable.id
    })
  },
  interestsTable: {
    titles: r.many.titlesTable({
      from: r.interestsTable.id.through(r.titleInterestsTable.interestId),
      to: r.titlesTable.id.through(r.titleInterestsTable.titleId)
    })
  },
  creditsTable: {
    titles: r.many.titlesTable({
      from: r.creditsTable.id.through(r.titleCreditsTable.creditId),
      to: r.titlesTable.id.through(r.titleCreditsTable.titleId)
    })
  }
}))