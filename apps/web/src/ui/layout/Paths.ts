import { Streamer } from "@repo/common";

export default class Paths {

  static streamer(streamer: Streamer) {
    return `/streamer/${streamer}`;
  }


}