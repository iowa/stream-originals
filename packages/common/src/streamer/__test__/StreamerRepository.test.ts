import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { PGlite } from "@electric-sql/pglite";
import { TitlesRepository } from "../../titles/TitlesRepository.js";
import { TestData } from "../../utils/testing/TestData.js";
import { TestEntities } from "../../utils/testing/TestEntities.js";
import { StreamerRepository } from "../StreamerRepository.js";
import { InterestsRepository } from "../../interests/InterestsRepository.js";

describe("StreamerRepository", async () => {
  let pgClient: PGlite
  let testEntities: TestEntities;
  let cut: StreamerRepository;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client

    testEntities = new TestEntities(
      new TitlesRepository(db as unknown as DbDrizzle),
      new InterestsRepository(db as unknown as DbDrizzle),
      undefined
    );
    cut = new StreamerRepository(db as unknown as DbDrizzle);
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("titlesStats", async () => {
    await prepareData()

    const result = await cut.titlesStats('netflix');

    expect(result).toMatchInlineSnapshot(`
      {
        "avgRating": "8.0",
        "total": 5,
        "totalEpisodes": 136,
      }
    `)
  })


  it("titlesByType", async () => {
    await prepareData()

    const result = await cut.titlesByType('netflix');

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "count": 3,
          "label": "tvSeries",
        },
        {
          "count": 2,
          "label": "tvMiniSeries",
        },
      ]
    `)
  })

  it("titleByCategory", async () => {
    await prepareData()

    const result = await cut.titleByCategoryTopN('netflix', 3);

    expect(result).toMatchInlineSnapshot(`
      [
        {
          "count": 5,
          "label": "Drama",
        },
        {
          "count": 3,
          "label": "Horror",
        },
        {
          "count": 3,
          "label": "Mystery",
        },
        {
          "count": 6,
          "label": "Other",
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