import { afterEach, beforeEach, describe, it, vi } from "vitest";
import { getDbMock } from "@repo/common/db/dbMock";
import { Db, TitlesRepository } from "@repo/common";
import { TitlesPatcher } from "../TitlesPatcher.js";
import { ImdbApiDevRestClient } from "../../../lib/source/imdbapidev/ImdbApiDevRestClient.js";
import { ImdbApiDevMapper } from "../../../lib/source/imdbapidev/ImdbApiDevMapper.js";

describe("TitlesPatcher", async () => {
  let { client, db } = await getDbMock();
  let titlesRepository: TitlesRepository;
  let imdbApiDevRestClient: ImdbApiDevRestClient;
  let imdbApiDevMapper: ImdbApiDevMapper;
  let cut: TitlesPatcher;

  beforeEach(() => {
    titlesRepository = new TitlesRepository(db as unknown as Db);
    imdbApiDevRestClient = new ImdbApiDevRestClient();
    imdbApiDevMapper = new ImdbApiDevMapper();
    cut = new TitlesPatcher(
      titlesRepository,
      imdbApiDevRestClient,
      imdbApiDevMapper
    );
    vi.clearAllMocks();
  });

  afterEach(async () => {
    await client.close();
  });

  it("patch title", async () => {

    const titlesPatchResponse = await cut.patch('appleTV+');
  });


});