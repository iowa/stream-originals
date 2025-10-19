import { Interest, Title } from "../db/dbTypes.js";


export type InterestPatchDto = Pick<Interest, 'id' | 'name'>;
export type CreditPatchDto = {
  credit: Pick<Interest, 'id' | 'name'>
};
export type TitlePatchDto = Title & {
  interests: InterestPatchDto[],
  stars: CreditPatchDto[],
  directors: CreditPatchDto[],
  writers: CreditPatchDto[],
}