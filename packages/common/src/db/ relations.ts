import { defineRelations } from "drizzle-orm";
import * as schema from "./schema.js";

export const relations = defineRelations(schema, (r) => ({
  titlesTable: {
    titleImages: r.many.titleImagesTable(),
    interests: r.many.interestsTable({
      from: r.titlesTable.id.through(r.titlesToInterests.titleId),
      to: r.interestsTable.id.through(r.titlesToInterests.interestId)
    })
  },
  titleImagesTable: {
    title: r.one.titlesTable({
      from: r.titleImagesTable.titleId,
      to: r.titlesTable.id
    })
  },
  interestsTable: {
    titles: r.many.titlesTable()
  }
}))

//https://rqbv2.drizzle-orm-fe.pages.dev/docs/relations-v1-v2