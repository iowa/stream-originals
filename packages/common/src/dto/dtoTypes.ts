import { Credit, Interest, Title, TitleCredit, TitleRating } from "../db/dbTypes.js";


export type InterestPatchDto = Pick<Interest, 'id' | 'name'>;
export type CreditPatchDto = {
  credit: Pick<Credit, 'id' | 'name'>
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
  interests: InterestListDto[],
  stars: CreditPatchDto[],
  directors: CreditPatchDto[],
  writers: CreditPatchDto[],
  ratings: TitleRatingPatchDto[],
}


export type TitleCreditWithCredit = TitleCredit & {
  credit: Credit
};

export type TitleDto = Title & {
  interests: InterestListDto[],
  ratings: TitleRatingPatchDto[],
  stars: TitleCreditWithCredit[],
  directors: TitleCreditWithCredit[],
  writers: TitleCreditWithCredit[],
}

export type ChartDataDto = {
  label: string | null,
  count: number,
}

export type CreditTitleDto = Title

export type CreditDto = Credit & {
  titles: CreditTitleDto[]
}

