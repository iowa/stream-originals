import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { PGlite } from "@electric-sql/pglite";
import { CDatas } from "../../utils/CDatas.js";
import { CreditsRepository } from "../../credits/CreditsRepository.js";
import { TitlesRepository } from "../TitlesRepository.js";
import { InterestsRepository } from "../../interests/InterestsRepository.js";
import { TestEntities } from "../../utils/TestEntities.js";

describe("TitlesRepository", async () => {
  let pgClient: PGlite
  let creditsRepository: CreditsRepository;
  let interestsRepository: InterestsRepository;
  let testEntities: TestEntities;
  let cut: TitlesRepository;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    creditsRepository = new CreditsRepository(db as unknown as DbDrizzle);
    interestsRepository = new InterestsRepository(db as unknown as DbDrizzle);
    cut = new TitlesRepository(db as unknown as DbDrizzle);
    testEntities = new TestEntities(cut, interestsRepository, creditsRepository)
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("getTitleDto", async () => {
    await prepareData()

    const result = await cut.getTitleDto(CDatas.TestTitle_House_of_Cards.title.id);

    expect(result).toMatchInlineSnapshot(`
      {
        "directors": [
          {
            "credit": {
              "id": "nm0001226",
              "imageUrl": "https://m.media-amazon.com/images/M/MV5BMjI1MDQyMTAxNF5BMl5BanBnXkFtZTgwMjg0MTM2NjE@._V1_.jpg",
              "name": "James Foley",
            },
            "creditId": "nm0001226",
            "role": "director",
            "titleId": "tt1856010",
          },
        ],
        "episodes": 73,
        "finale": "2018-11-02",
        "id": "tt1856010",
        "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
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
        "seasons": 6,
        "stars": [
          {
            "credit": {
              "id": "nm0000228",
              "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
              "name": "Kevin Spacey",
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
              "imageUrl": "https://m.media-amazon.com/images/M/MV5BMTQ2ODk3Mjg3Ml5BMl5BanBnXkFtZTcwNTQyMjQwOQ@@._V1_.jpg",
              "name": "Beau Willimon",
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
    await testEntities.insertTitle(CDatas.TestTitle_House_of_Cards)
  }
});