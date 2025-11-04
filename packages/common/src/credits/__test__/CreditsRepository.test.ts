import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getDbMock } from "../../db/dbMock.js";
import { DbDrizzle } from "../../db/dbDrizzle.js";
import { PGlite } from "@electric-sql/pglite";
import { CreditsRepository } from "../CreditsRepository.js";
import { TitlesRepository } from "../../titles/TitlesRepository.js";
import { CDatas } from "../../utils/CDatas.js";

describe("CreditsRepository", async () => {
  let pgClient: PGlite
  let titlesRepository: TitlesRepository;
  let cut: CreditsRepository;

  beforeEach(async () => {
    let { client, db } = await getDbMock();
    pgClient = client
    titlesRepository = new TitlesRepository(db as unknown as DbDrizzle);
    cut = new CreditsRepository(db as unknown as DbDrizzle);
  });

  afterEach(async () => {
    await pgClient.close();
  });

  it("getCreditDto", async () => {
    await prepareData()

    const result = await cut.getCreditDto(CDatas.Credit_nm0000228.id);

    expect(result).toMatchInlineSnapshot(`
      {
        "id": "nm0000228",
        "name": "Kevin Spacey",
        "primaryImageHeight": 1800,
        "primaryImageUrl": "https://m.media-amazon.com/images/M/MV5BMTY1NzMyODc3Nl5BMl5BanBnXkFtZTgwNzE2MzA1NDM@._V1_.jpg",
        "primaryImageWidth": 1471,
        "titles": [
          {
            "episodes": 73,
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
            "name": "House of Cards",
            "plot": "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
            "premiere": "2013-02-01",
            "runtimeSeconds": 3000,
            "seasons": 6,
            "streamer": "netflix",
            "type": "tvSeries",
            "updatedAt": 1970-01-01T00:00:00.000Z,
          },
        ],
      }
    `)
  })

  async function prepareData() {
    await titlesRepository.insert(CDatas.Title_tt1856010);
    await titlesRepository.insertImage(CDatas.TitleImage_tt1856010_poster)
    await cut.insert(CDatas.Credit_nm0000228)
    await cut.insertTitle(CDatas.TitleCredit_tt1856010_nm0000228_star)
  }

});