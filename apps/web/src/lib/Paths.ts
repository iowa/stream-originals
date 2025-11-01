import { Streamer } from "@repo/common";

export class Paths {

  static titles(streamer: Streamer) {
    return `/titles/${streamer}`
  }

  static title(titleId: string) {
    return `/title/${titleId}`
  }

  static credit(nameId: string) {
    return `/name/${nameId}`
  }

}