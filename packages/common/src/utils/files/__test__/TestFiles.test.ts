import { describe, expect, it } from "vitest";
import { TestFiles } from "../TestFiles.js";

describe("testFiles", () => {
  it("loadJson", () => {
    const result = TestFiles.loadJson(__dirname, "data/alfa-romeo-156.json");

    expect(result).toMatchInlineSnapshot(`
      {
        "bodyType": "Sedan",
        "brand": "Alfa Romeo",
        "model": "156",
        "modelDate": "2002",
      }
    `);
  });

  it("loadHtml", () => {
    const result = TestFiles.load(__dirname, "data/alfa-romeo-156-div.html");

    expect(result).toMatchInlineSnapshot(`
      "<div class="carmod clearfix ">
        <div class="col2width bcol-white fl">
          <div class="padcol2">
            <a href="https://www.autoevolution.com/alfa-romeo/156/"
               title="ALFA ROMEO 156 specs and photos">
              <img loading="lazy" decoding="async" title="ALFA ROMEO 156 specs and photos"
                   alt="ALFA ROMEO 156 specs and photos"
                   src="https://s1.cdn.autoevolution.com/images/models/thumb/ALFA ROMEO_156-2004_main.jpg_tmb.jpg"
                   width="90" height="60">
              <h4>ALFA ROMEO 156</h4>
            </a>
            <p class="body">sedans</p>
            <p class="eng"><span>Gasoline</span> · <span>Diesel</span></p>
          </div>
        </div>
        <div class="col3width fl">
          <p><b class="col-green2">3</b> generations</p>
          <span>1997 - 2005</span>
        </div>
      </div>"
    `);
  });
});
