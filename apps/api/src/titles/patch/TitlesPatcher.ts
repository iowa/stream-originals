import { Streamer, TitlesPatchResponse } from "@repo/common";

export class TitlesPatcher {
  async patch(streamer: Streamer) {
    return {
      items: []
    } as TitlesPatchResponse
  }
}