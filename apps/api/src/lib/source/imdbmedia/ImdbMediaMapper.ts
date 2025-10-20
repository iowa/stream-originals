import { ImdbMediaTitle, ImdbMediaTitleImage, } from "./ImdbMediaTypes.js";
import { Title, TitleDraft, TitleImage, TitleType } from "@repo/common";

export class ImdbMediaMapper {

  mapTitle(title: TitleDraft, imdbTitle: ImdbMediaTitle): Title {
    return {
      ...title,
      id: imdbTitle.id ?? null,
      type: imdbTitle.qid as TitleType ?? null,
    } as Title;
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