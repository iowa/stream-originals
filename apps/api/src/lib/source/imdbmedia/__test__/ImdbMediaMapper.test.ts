import { describe, expect, it } from "vitest";
import { Title } from "@repo/common";
import { ImdbMediaMapper } from "../ImdbMediaMapper.js";
import { TestFiles } from "../../../utils/files/TestFiles.js";
import { ImdbMediaTitle } from "../ImdbMediaTypes.js";

describe("ImdbMediaMapper", () => {
  it("mapTitle", () => {
    const imdbMediaTitleText = TestFiles.load(__dirname, '/data/imdbMedia_tt1856010.json');
    const result = ImdbMediaMapper.mapTitle({
      name: "House of Cards",
      premiere: "2013-02-01",
      streamer: "netflix",
    } as Title, JSON.parse(imdbMediaTitleText) as ImdbMediaTitle)

    expect(result).toMatchInlineSnapshot(`
      {
        "imdbId": "tt1856010",
        "imdbType": "tvSeries",
        "name": "House of Cards",
        "premiere": "2013-02-01",
        "streamer": "netflix",
      }
    `);
  });
});
