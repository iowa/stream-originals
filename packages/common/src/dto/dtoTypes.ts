import { Interest, Rating, Title, TitleImage } from "../db/dbTypes.js";


export type InterestPatchDto = Pick<Interest, 'id' | 'name'>;
export type CreditPatchDto = {
  credit: Pick<Interest, 'id' | 'name'>
};
export type RatingPatchDto = Pick<Rating, 'type' | 'total' | 'voteCount'>;

export type TitlePatchDto = Title & {
  interests: InterestPatchDto[],
  stars: CreditPatchDto[],
  directors: CreditPatchDto[],
  writers: CreditPatchDto[],
  ratings: RatingPatchDto[],
}

export type InterestListDto = Pick<Interest, 'id' | 'name' | 'isSubgenre'>;

export type TitleListDto = Title & {
  images: TitleImage[],
  interests: InterestListDto[],
  stars: CreditPatchDto[],
  directors: CreditPatchDto[],
  writers: CreditPatchDto[],
  ratings: RatingPatchDto[],
}