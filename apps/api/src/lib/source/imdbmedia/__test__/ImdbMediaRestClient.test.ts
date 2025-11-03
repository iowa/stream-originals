import { describe, expect, it } from "vitest";
import { ImdbMediaRestClient } from "../ImdbMediaRestClient.js";
import { CDatas } from "@repo/common";

describe("ImdbMediaRestClient", () => {
  it("findTitle House of Cards", async () => {
    const result = await new ImdbMediaRestClient().findTitle(CDatas.TitleDraft_HouseOfCards);
    expect(result?.l).equals("House of Cards");
    expect(result?.y).equals(2013);
  });

});
