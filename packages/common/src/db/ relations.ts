import { defineRelations } from "drizzle-orm";
import * as schema from "./schema.js";

export const relations = defineRelations(schema, (r) => ({
  titlesTable: {
    titleImages: r.many.titleImagesTable()
  },
  titleImagesTable: {
    title: r.one.titlesTable({
      from: r.titleImagesTable.titleId,
      to: r.titlesTable.id
    })
  }
}))