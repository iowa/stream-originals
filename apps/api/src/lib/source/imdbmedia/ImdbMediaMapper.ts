import { Title, TitleMediaInsert, TitleType } from "@repo/common";
import { ImdbMediaTitle, ImdbMediaTitleImage } from "./ImdbMediaTypes.js";

export class ImdbMediaMapper {

  static mapTitle(title: Title, imdbTitle?: ImdbMediaTitle): Title {
    if (!imdbTitle) {
      return title
    }
    return {
      ...title,
      imdbId: imdbTitle.id ?? null,
      imdbType: imdbTitle.qid as TitleType ?? null,
    };
  }

  static mapPoster(titleId: string, poster: ImdbMediaTitleImage): TitleMediaInsert {
    return {
      titleId: titleId,
      url: poster.imageUrl,
      width: poster.width,
      height: poster.height,
      type: "poster",
    }
  }

}