import { describe, expect, it } from "vitest";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { TestFiles } from "../../../utils/files/TestFiles.js";
import { WikiTitlesTable } from "../WikiTitlesTable.js";

describe("WikiTitlesTable", () => {
  it("parseRow For All Mankind", () => {
    const html = TestFiles.load(
      dirname(fileURLToPath(import.meta.url)),
      "/data/tr_For_All_Mankind.html",
    );

    const result = WikiTitlesTable.parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "For All Mankind",
        "premiere": "2019-11-01",
      }
    `);
  });

  it("parseRow The Savant", () => {
    const html = TestFiles.load(
      dirname(fileURLToPath(import.meta.url)),
      "/data/tr_The_Savant.html",
    );

    const result = WikiTitlesTable.parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "The Savant",
        "premiere": "2025-09-26",
      }
    `);
  });

  it("parseRow Eva the Owlet", () => {
    const html = TestFiles.load(
      dirname(fileURLToPath(import.meta.url)),
      "/data/tr_Eva_the_Owlet.html",
    );

    const result = WikiTitlesTable.parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "Eva the Owlet",
        "premiere": "2023-03-31",
      }
    `);
  });

  it("parseRow Neuromancer", () => {
    const html = TestFiles.load(
      dirname(fileURLToPath(import.meta.url)),
      "/data/tr_Neuromancer.html",
    );

    const result = WikiTitlesTable.parseRow(html);
    expect(result).toMatchInlineSnapshot(`
      {
        "name": "Neuromancer",
        "premiere": undefined,
      }
    `);
  });
});
