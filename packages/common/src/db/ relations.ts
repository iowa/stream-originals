import { defineRelations } from "drizzle-orm";
import * as schema from "./schema.js";

export const relations = defineRelations(schema, (r) => ({
  creditsTable: {
    titles: r.many.titlesTable({
      from: r.creditsTable.id.through(r.titleCreditsTable.creditId),
      to: r.titlesTable.id.through(r.titleCreditsTable.titleId),
    })
  },
  interestsTable: {
    titles: r.many.titlesTable({
      from: r.interestsTable.id.through(r.titleInterestsTable.interestId),
      to: r.titlesTable.id.through(r.titleInterestsTable.titleId)
    })
  },
  titlesTable: {
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
    ratings: r.many.titleRatingsTable()
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
  titleRatingsTable: {
    title: r.one.titlesTable({
      from: r.titleRatingsTable.titleId,
      to: r.titlesTable.id
    })
  }
}))