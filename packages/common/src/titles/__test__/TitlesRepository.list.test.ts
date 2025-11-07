import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { PGlite } from "@electric-sql/pglite";
import { CDatas } from "../../utils/CDatas.js";
import { TitlesRepository } from "../TitlesRepository.js";

describe("TitlesRepository list", async () => {
  let pgClient: PGlite
  let cut: TitlesRepository;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    cut = new TitlesRepository(db as unknown as DbDrizzle);
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("pageSize", async () => {
    await prepareData()

    const result1 = await cut.geTitleListDtos('netflix', 1, 1);

    expect(result1.map(value => value.name)).toEqual(
      [
        "Stranger Things",
      ]
    )
    const result2 = await cut.geTitleListDtos('netflix', 1, 2);

    expect(result2.map(value => value.name)).toEqual(
      [
        "Stranger Things",
        "House of Cards"
      ]
    )
  })

  it("page", async () => {
    await prepareData()

    const result1 = await cut.geTitleListDtos('netflix', 1, 2);

    expect(result1.map(value => value.name)).toEqual(
      [
        "Stranger Things",
        "House of Cards"
      ]
    )
    const result2 = await cut.geTitleListDtos('netflix', 2, 2);

    expect(result2.map(value => value.name)).toEqual(
      [
        "The Watcher"
      ]
    )
  })


  async function prepareData() {
    /*
    await cut.insert(CDatas.Title_tt1856010)
    await cut.insertTitleRating(CDatas.TitleRating_tt1856010_imdb)
    await cut.insert(CDatas.Title_tt4574334)
    await cut.insertTitleRating(CDatas.TitleRating_tt4574334_imdb)
    await cut.insert(CDatas.Title_tt14852808)
    await cut.insertTitleRating(CDatas.TitleRating_tt14852808_imdb)

     */
  }

});