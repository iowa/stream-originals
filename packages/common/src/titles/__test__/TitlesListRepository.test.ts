import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { PGlite } from "@electric-sql/pglite";
import { TitlesListRepository } from "../TitlesListRepository.js";
import { TestEntities } from "../../utils/testing/TestEntities.js";
import { TitlesRepository } from "../TitlesRepository.js";
import { TestData } from "../../utils/testing/TestData.js";

describe("TitlesListRepository", async () => {
  let pgClient: PGlite
  let titlesRepository: TitlesRepository
  let testEntities: TestEntities
  let cut: TitlesListRepository;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);
    cut = new TitlesListRepository(db as unknown as DbDrizzle);
    testEntities = new TestEntities(titlesRepository, undefined, undefined);
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("pageSize", async () => {
    await prepareData()

    const result1 = await cut.getTitles('netflix', 1, 1);

    expect(result1.map(value => value.name)).toEqual(
      [
        "Stranger Things",
      ]
    )
    const result2 = await cut.getTitles('netflix', 1, 2);

    expect(result2.map(value => value.name)).toEqual(
      [
        "Stranger Things",
        "House of Cards"
      ]
    )
  })

  it("page", async () => {
    await prepareData()

    const result1 = await cut.getTitles('netflix', 1, 2);

    expect(result1.map(value => value.name)).toEqual(
      [
        "Stranger Things",
        "House of Cards"
      ]
    )
    const result2 = await cut.getTitles('netflix', 2, 2);

    expect(result2.map(value => value.name)).toEqual(
      [
        "The Watcher"
      ]
    )
  })


  async function prepareData() {
    await testEntities.insertTitle(TestData.TestTitle_HouseOfCards)
    await testEntities.insertTitle(TestData.TestTitle_TheWatcher)
    await testEntities.insertTitle(TestData.TestTitle_MidnightMass)
  }

});