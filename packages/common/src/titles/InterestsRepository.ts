import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { db } from "../db/db.js";

export class InterestsRepository {
  private readonly db: NodePgDatabase

  constructor(dbInstance: any = db) {
    this.db = dbInstance
  }

}