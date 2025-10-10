import { describe, expect, it } from "vitest";
import type { Title } from "@repo/common";
import { ImdbMediaRestClient } from "../ImdbMediaRestClient.js";

describe("ImdbMediaRestClient", () => {
  it("findTitle House of Cards", async () => {
    const result = await ImdbMediaRestClient.findTitle({
      name: "House of Cards",
      premiere: "2013-02-01",
      streamer: "netflix",
    } as Title);
    expect(result?.l).equals("House of Cards");
    expect(result?.y).equals(2013);
  });

});
