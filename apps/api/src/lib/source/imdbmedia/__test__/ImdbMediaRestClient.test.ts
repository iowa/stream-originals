import { describe, expect, it } from "vitest";
import type { Title } from "@repo/common";
import { ImdbMediaRestClient } from "../ImdbMediaRestClient.js";

describe("ImdbMediaRestClient", () => {
  it("findTitle The Last Thing He Told Me", async () => {
    const title = {
      name: "The Last Thing He Told Me",
      premiere: "2023-04-14",
      streamer: "appleTV+",
    } as Title;
    const result = await ImdbMediaRestClient.findTitle(title);
    expect(result?.l).equals("The Last Thing He Told Me");
    expect(result?.y).equals(2023);
  });

  it("findTitle You Would Do It Too", async () => {
    const title = {
      name: "You Would Do It Too",
      premiere: "2024-10-30",
      streamer: "appleTV+",
    } as Title;
    const result = await ImdbMediaRestClient.findTitle(title);
    expect(result?.l).equals("You Would Do It Too");
    expect(result?.y).equals(2023);
  });

  it("findTitle Where's Wanda?", async () => {
    const title = {
      name: "Where's Wanda?",
      premiere: "2024-10-02",
      streamer: "appleTV+",
    } as Title;
    const result = await ImdbMediaRestClient.findTitle(title);
    expect(result?.l).equals("Where's Wanda?");
    expect(result?.y).equals(2024);
  });
});
