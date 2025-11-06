import { Title, TitleDraft, TitleType } from "@repo/common";
import { ImdbTitle } from "./ImdbTypes.js";

export class ImdbMapper {

  mapTitle(title: TitleDraft, imdbTitle: ImdbTitle): Title {
    return {
      ...title,
      id: imdbTitle.id ?? null,
      type: imdbTitle.qid as TitleType ?? null,
      imageUrl: imdbTitle.i?.imageUrl ?? null,
    } as Title;
  }

}