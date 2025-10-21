import { defineRelations } from "drizzle-orm";
import * as schema from "./schema.js";

export const relations = defineRelations(schema, (r) => ({
  titlesTable: {
    images: r.many.titleImagesTable(),
    interests: r.many.interestsTable(),
    stars: r.many.titleCreditsTable({
      where: {
        role: 'star'
      }
    }),
    directors: r.many.titleCreditsTable({
      where: {
        role: 'director'
      }
    }),
    writers: r.many.titleCreditsTable({
      where: {
        role: 'writer'
      }
    }),
    ratings: r.many.ratingsTable()
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
  titleCreditsTable: {
    title: r.one.titlesTable({
      from: r.titleCreditsTable.titleId,
      to: r.titlesTable.id
    }),
    credit: r.one.creditsTable({
      from: r.titleCreditsTable.creditId,
      to: r.creditsTable.id,
      optional: false
    })
  },
  ratingsTable: {
    title: r.one.titlesTable({
      from: r.ratingsTable.titleId,
      to: r.titlesTable.id
    })
  }
}))