import { AppConstants } from "@/lib/AppConstants";
import { TimesClient } from "@/lib/utils/TimesClient";
import { Title } from "@repo/common";
import { capitalCase } from "text-case";

export class TitleUtils {

  static getYearRange(premiere: string | null, finale?: string | null): string {
    const startYear = TimesClient.asDayjs(premiere).year();
    if (isNaN(startYear)) return AppConstants.NOT_AVAILABLE;
    const endYear = finale && TimesClient.asDayjs(finale).year();
    return !endYear || startYear === endYear ? `${startYear}` : `${startYear}–${endYear}`;
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

  static formatTypeDetails(title: Title): string {
    let details = capitalCase(title.type);
    if (title.episodes != null) {
      details += title.seasons != null
        ? ` (S${title.seasons} E${title.episodes})`
        : ` (E${title.episodes})`;
    }
    return details;
  }

}