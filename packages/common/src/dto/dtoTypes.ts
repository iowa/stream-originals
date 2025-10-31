import { Interest, TitleRating, Title, TitleImage } from "../db/dbTypes.js";


export type InterestPatchDto = Pick<Interest, 'id' | 'name'>;
export type CreditPatchDto = {
  credit: Pick<Interest, 'id' | 'name'>
};
export type TitleRatingPatchDto = Pick<TitleRating, 'type' | 'total' | 'voteCount'>;

export type TitlePatchDto = Title & {
  interests: InterestPatchDto[],
  stars: CreditPatchDto[],
  directors: CreditPatchDto[],
  writers: CreditPatchDto[],
  ratings: TitleRatingPatchDto[],
}

export type InterestListDto = Pick<Interest, 'id' | 'name' | 'isSubgenre'>;

export type TitleListDto = Title & {
  images: TitleImage[],
  interests: InterestListDto[],
  stars: CreditPatchDto[],
  directors: CreditPatchDto[],
  writers: CreditPatchDto[],
  ratings: TitleRatingPatchDto[],
}

export type TitleDto = Title & {
  images: TitleImage[],
  interests: InterestListDto[],
  ratings: TitleRatingPatchDto[],
}