import {Streamer} from '@repo/common';

export class Paths {
  static credit(nameId: string) {
    return `/name/${nameId}`;
  }

  static streamer(streamer: Streamer) {
    return `/streamer/${streamer}`;
  }

  static title(titleId: string) {
    return `/title/${titleId}`;
  }

  static titles(streamer?: Streamer) {
    return streamer
      ? `/titles?streamer=${encodeURIComponent(streamer)}`
      : `/titles`;
  }
}
