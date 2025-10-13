import { ImdbMediaTitle, ImdbMediaTitleImage, } from "./ImdbMediaTypes.js";
import { Title, TitleImage, TitleType } from "@repo/common";

export class ImdbMediaMapper {

  mapTitle(title: Title, imdbTitle?: ImdbMediaTitle): Title {
    if (!imdbTitle) {
      return title
    }
    return {
      ...title,
      imdbId: imdbTitle.id ?? null,
      imdbType: imdbTitle.qid as TitleType ?? null,
    };
  }

  mapPoster(titleId: string, poster: ImdbMediaTitleImage): TitleImage {
    return {
      titleId: titleId,
      url: poster.imageUrl,
      width: poster.width,
      height: poster.height,
      type: "poster",
    } as TitleImage
  }

}