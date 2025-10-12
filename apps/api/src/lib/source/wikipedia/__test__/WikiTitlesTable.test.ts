import { describe, expect, it } from "vitest";
import { TestFiles } from "../../../utils/files/TestFiles.js";
import { WikiTitlesTable } from "../WikiTitlesTable.js";

describe("WikiTitlesTable", () => {
  it("parseRow For All Mankind", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_For_All_Mankind.html",
    );

    const result = new WikiTitlesTable().parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "For All Mankind",
        "premiere": "2019-11-01",
      }
    `);
  });

  it("parseRow The Savant", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_The_Savant.html",
    );

    const result = new WikiTitlesTable().parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "The Savant",
        "premiere": "2025-09-26",
      }
    `);
  });

  it("parseRow Eva the Owlet", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_Eva_the_Owlet.html",
    );

    const result = new WikiTitlesTable().parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "Eva the Owlet",
        "premiere": "2023-03-31",
      }
    `);
  });

  it("parseRow Neuromancer", () => {
    const html = TestFiles.load(
      __dirname,
      "/data/tr_Neuromancer.html",
    );

    const result = new WikiTitlesTable().parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "Neuromancer",
        "premiere": undefined,
      }
    `);
  });
});
