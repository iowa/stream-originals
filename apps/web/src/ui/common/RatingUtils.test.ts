import { describe, it, expect } from 'vitest';
import { RatingUtils } from "~/ui/common/RatingUtils";

describe('RatingUtils.formatVoteCount', () => {
  it('returns (~) for undefined', () => {
    expect(RatingUtils.formatVoteCount(undefined)).toBe('(~)');
  });

  it('returns (~) for null', () => {
    expect(RatingUtils.formatVoteCount(null)).toBe('(~)');
  });

  it('returns (0) for 0', () => {
    expect(RatingUtils.formatVoteCount(0)).toBe('(0)');
  });

  it('returns (999) for 999', () => {
    expect(RatingUtils.formatVoteCount(999)).toBe('(999)');
  });

  it('returns (1K) for 1000', () => {
    expect(RatingUtils.formatVoteCount(1000)).toBe('(1K)');
  });

  it('returns (12K) for 12345', () => {
    expect(RatingUtils.formatVoteCount(12345)).toBe('(12K)');
  });

  it('returns (100K) for 100000', () => {
    expect(RatingUtils.formatVoteCount(100000)).toBe('(100K)');
  });
});
