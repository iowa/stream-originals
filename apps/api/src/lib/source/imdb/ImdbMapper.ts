import { Title, TitleDraft, TitleImage, TitleType } from "@repo/common";
import { ImdbTitle, ImdbTitleImage } from "./ImdbTypes.js";

export class ImdbMapper {

  mapTitle(title: TitleDraft, imdbTitle: ImdbTitle): Title {
    return {
      ...title,
      id: imdbTitle.id ?? null,
      type: imdbTitle.qid as TitleType ?? null,
    } as Title;
  }

  mapPoster(titleId: string, poster: ImdbTitleImage): TitleImage {
    return {
      titleId: titleId,
      url: poster.imageUrl,
      width: poster.width,
      height: poster.height,
      type: "poster",
    } as TitleImage
  }

}