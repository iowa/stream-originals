import { Times } from "@repo/common";

export class TitleDateUtils {
  static getYearRange(premiere: string | null, finale?: string | null): string {
    const startYear = Times.asDayjs(premiere).year();
    const endYear = finale ? Times.asDayjs(finale).year() : null;
    return endYear ? `${startYear}–${endYear}` : `${startYear}`;
  }
}

