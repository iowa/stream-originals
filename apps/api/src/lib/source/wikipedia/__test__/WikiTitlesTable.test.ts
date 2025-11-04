import { describe, expect, it } from "vitest";
import { WikiTitlesTable } from "../WikiTitlesTable.js";
import { TestFiles } from "@repo/common";

describe("WikiTitlesTable", () => {
  it("parseRow For All Mankind", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_For_All_Mankind.html",
    );

    const result = new WikiTitlesTable().parseRow(html, "appleTV+");
    expect(result).toMatchInlineSnapshot(`
      {
        "finale": null,
        "id": "",
        "name": "For All Mankind",
        "premiere": "2019-11-01",
        "streamer": "appleTV+",
      }
    `);
  });

  it("parseRow The Savant", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_The_Savant.html",
    );

    const result = new WikiTitlesTable().parseRow(html, "appleTV+");
    expect(result).toMatchInlineSnapshot(`
      {
        "finale": null,
        "id": "",
        "name": "The Savant",
        "premiere": "2025-09-26",
        "streamer": "appleTV+",
      }
    `);
  });

  it("parseRow Eva the Owlet", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_Eva_the_Owlet.html",
    );

    const result = new WikiTitlesTable().parseRow(html, "appleTV+");
    expect(result).toMatchInlineSnapshot(`
      {
        "finale": null,
        "id": "",
        "name": "Eva the Owlet",
        "premiere": "2023-03-31",
        "streamer": "appleTV+",
      }
    `);
  });

  it("parseRow Neuromancer", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_Neuromancer.html",
    );

    const result = new WikiTitlesTable().parseRow(html, "appleTV+");
    expect(result).toMatchInlineSnapshot(`
      {
        "finale": null,
        "id": "",
        "name": "Neuromancer",
        "premiere": null,
        "streamer": "appleTV+",
      }
    `);
  });

  it("parseEndedRow Defending Jacob", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_Defending_Jacob.html",
    );

    const result = new WikiTitlesTable().parseEndedRow(html, "appleTV+");
    expect(result).toMatchInlineSnapshot(`
      {
        "finale": "2020-05-29",
        "id": "",
        "name": "Defending Jacob",
        "premiere": "2020-04-24",
        "streamer": "appleTV+",
      }
    `);
  });

  it("parseEndedRow Surfside Girls", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_Surfside_Girls.html",
    );

    const result = new WikiTitlesTable().parseEndedRow(html, "appleTV+");
    expect(result).toMatchInlineSnapshot(`
      {
        "finale": "2022-08-19",
        "id": "",
        "name": "Surfside Girls",
        "premiere": "2022-08-19",
        "streamer": "appleTV+",
      }
    `);
  });

});
