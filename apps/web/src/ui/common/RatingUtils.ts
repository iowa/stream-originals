export class RatingUtils {
  static formatVoteCount(voteCount?: number | null): string {
    if (voteCount == null) return "(~)";
    if (voteCount < 1000) return `(${voteCount})`;
    return `(${Math.floor(voteCount / 1000)}K)`;
  }
}
