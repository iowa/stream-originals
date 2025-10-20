import { describe, expect, it } from "vitest";
import { ImdbMediaRestClient } from "../ImdbMediaRestClient.js";
import { Datas } from "../../../utils/data/Datas.js";

describe("ImdbMediaRestClient", () => {
  it("findTitle House of Cards", async () => {
    const result = await new ImdbMediaRestClient().findTitle(Datas.TitleDraft_HouseOfCards);
    expect(result?.l).equals("House of Cards");
    expect(result?.y).equals(2013);
  });

});
