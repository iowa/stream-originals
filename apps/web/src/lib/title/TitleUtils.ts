import { Times } from "@repo/common";
import { AppConstants } from "@/lib/AppConstants";

export class TitleUtils {

  static getYearRange(premiere: string | null, finale?: string | null): string {
    const startYear = Times.asDayjs(premiere).year();
    if (isNaN(startYear)) return AppConstants.NOT_AVAILABLE;
    const endYear = finale ? Times.asDayjs(finale).year() : null;
    return endYear ? `${startYear}–${endYear}` : `${startYear}`;
  }

  static formatVoteCount(voteCount?: number | null): string {
    if (voteCount == null) return `(${AppConstants.NOT_AVAILABLE})`;
    if (voteCount < 1000) return `(${voteCount})`;
    return `(${Math.floor(voteCount / 1000)}K)`;
  }

  static runtime(runtimeSeconds: number | null): string {
    if (!runtimeSeconds || runtimeSeconds <= 0) return AppConstants.NOT_AVAILABLE;
    const hours = Math.floor(runtimeSeconds / 3600);
    const minutes = Math.floor((runtimeSeconds % 3600) / 60);
    if (hours > 0 && minutes > 0) return `${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h`;
    return `${minutes}m`;
  }
}