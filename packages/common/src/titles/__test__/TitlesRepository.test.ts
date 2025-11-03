import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { PGlite } from "@electric-sql/pglite";
import { CDatas } from "../../utils/CDatas.js";
import { CreditsRepository } from "../../credits/CreditsRepository.js";
import { TitlesRepository } from "../TitlesRepository.js";
import { InterestsRepository } from "../../interests/InterestsRepository.js";

describe("TitlesRepository", async () => {
  let pgClient: PGlite
  let creditsRepository: CreditsRepository;
  let interestsRepository: InterestsRepository;
  let cut: TitlesRepository;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    creditsRepository = new CreditsRepository(db as unknown as DbDrizzle);
    interestsRepository = new InterestsRepository(db as unknown as DbDrizzle);
    cut = new TitlesRepository(db as unknown as DbDrizzle);
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("getTitleDto", async () => {
    await prepareData()

    const result = await cut.getTitleDto(CDatas.Title_tt1856010.id);

    expect(result).toMatchInlineSnapshot(`
      {
        "directors": [
          {
            "credit": {
              "id": "nm0001226",
              "name": "James Foley",
              "primaryImageHeight": 548,
              "primaryImageUrl": "https://m.media-amazon.com/images/M/MV5BMjI1MDQyMTAxNF5BMl5BanBnXkFtZTgwMjg0MTM2NjE@._V1_.jpg",
              "primaryImageWidth": 362,
            },
            "creditId": "nm0001226",
            "role": "director",
            "titleId": "tt1856010",
          },
        ],
        "id": "tt1856010",
        "images": [
          {
            "height": 2048,
            "id": "cb8fcac8-e826-4f91-9cb6-e78641168274",
            "titleId": "tt1856010",
            "type": "poster",
            "url": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
            "width": 1382,
          },
        ],
        "interests": [
          {
            "id": "in0000076",
            "isSubgenre": null,
            "name": "Drama",
          },
        ],
        "name": "House of Cards",
        "plot": "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
        "premiere": "2013-02-01",
        "ratings": [
          {
            "total": "8.6",
            "type": "imdb",
            "voteCount": 552661,
          },
        ],
        "runtimeSeconds": 3000,
        "stars": [
          {
            "credit": {
              "id": "nm0000228",
              "name": "Kevin Spacey",
              "primaryImageHeight": 1800,
              "primaryImageUrl": "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
              "primaryImageWidth": 1471,
            },
            "creditId": "nm0000228",
            "role": "star",
            "titleId": "tt1856010",
          },
        ],
        "streamer": "netflix",
        "type": "tvSeries",
        "updatedAt": 1970-01-01T00:00:00.000Z,
        "writers": [
          {
            "credit": {
              "id": "nm2802722",
              "name": "Beau Willimon",
              "primaryImageHeight": 1365,
              "primaryImageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2ODk3Mjg3Ml5BMl5BanBnXkFtZTcwNTQyMjQwOQ@@._V1_.jpg",
              "primaryImageWidth": 2048,
            },
            "creditId": "nm2802722",
            "role": "writer",
            "titleId": "tt1856010",
          },
        ],
      }
    `)
  })

  async function prepareData() {
    await cut.insert(CDatas.Title_tt1856010)
    await cut.insertRating(CDatas.TitleRating_tt1856010_imdb)
    await cut.insertImage(CDatas.TitleImage_tt1856010_poster)
    await creditsRepository.insert(CDatas.Credit_nm0000228)
    await creditsRepository.insertTitle(CDatas.TitleCredit_tt1856010_nm0000228_star)
    await creditsRepository.insert(CDatas.Credit_nm0001226)
    await creditsRepository.insertTitle(CDatas.TitleCredit_tt1856010_nm0001226_director)
    await creditsRepository.insert(CDatas.Credit_nm2802722)
    await creditsRepository.insertTitle(CDatas.TitleCredit_tt1856010_nm2802722_writer)
    await interestsRepository.insert(CDatas.Interest_in0000076)
    await interestsRepository.insertTitle(CDatas.TitleInterest_tt1856010_in0000076)
  }

});