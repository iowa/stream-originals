import { Credit, Interest, Title, TitleCredit } from "../db/dbTypes.js";


export type InterestPatchDto = Pick<Interest, 'id' | 'name'>;
export type CreditPatchDto = Pick<Credit, 'id' | 'imdbId' | 'displayName'> & {
  credit: Pick<TitleCredit, 'role'>
};
export type TitlePatchDto = Title & {
  interests: InterestPatchDto[],
  credits: CreditPatchDto[]
}