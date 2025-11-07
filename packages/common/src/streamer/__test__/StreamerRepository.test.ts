import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { PGlite } from "@electric-sql/pglite";
import { TitlesRepository } from "../../titles/TitlesRepository.js";
import { TestData } from "../../utils/testing/TestData.js";
import { TestEntities } from "../../utils/testing/TestEntities.js";
import { StreamerRepository } from "../StreamerRepository.js";

describe("StreamerRepository", async () => {
  let pgClient: PGlite
  let testEntities: TestEntities;
  let cut: StreamerRepository;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    testEntities = new TestEntities(new TitlesRepository(db as unknown as DbDrizzle), undefined, undefined);
    cut = new StreamerRepository(db as unknown as DbDrizzle);
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("titleTypes", async () => {
    await prepareData()

    const result = await cut.titleTypes('netflix');

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "type": "tvSeries",
          "typeCount": 3,
        },
        {
          "type": "tvMiniSeries",
          "typeCount": 2,
        },
      ]
    `)
  })

  async function prepareData() {
    await testEntities.insertTitle(TestData.TestTitle_HouseOfCards)
    await testEntities.insertTitle(TestData.TestTitle_TheWatcher)
    await testEntities.insertTitle(TestData.TestTitle_StrangerThings)
    await testEntities.insertTitle(TestData.TestTitle_MidnightMass)
    await testEntities.insertTitle(TestData.TestTitle_TheQueensGambit)
  }
});