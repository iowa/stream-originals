import fs from "node:fs";
import path from "node:path";

export class TestFiles {
  static loadJson(dirname: string, fileName: string) {
    return JSON.parse(fs.readFileSync(path.join(dirname, fileName), "utf8"));
  }

  static load(dirname: string, fileName: string) {
    return fs.readFileSync(path.join(dirname, fileName), "utf8");
  }
}
