import type { TitleType } from "@repo/common";

export class ImdbMapper {
  static mapType(type: string | undefined): TitleType | undefined {
    switch (type) {
      case "movie":
        return "MOVIE";
      case "tvSeries":
        return "TV_SERIES";
      case "tvMiniSeries":
        return "TV_MINI_SERIES";
      case "tvSpecial":
        return "TV_SPECIAL";
      case "tvMovie":
        return "TV_MOVIE";
      case "short":
        return "SHORT";
      case "video":
        return "VIDEO";
      case "videoGame":
        return "VIDEO_GAME";
      default:
        return undefined;
    }
  }
}
