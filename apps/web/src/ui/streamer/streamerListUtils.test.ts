import { describe, it, expect } from 'vitest';
import { StreamerListUtils } from './streamerListUtils';

describe('StreamerListUtils.formatVoteCount', () => {
  it('returns (~) for undefined', () => {
    expect(StreamerListUtils.formatVoteCount(undefined)).toBe('(~)');
  });

  it('returns (~) for null', () => {
    expect(StreamerListUtils.formatVoteCount(null)).toBe('(~)');
  });

  it('returns (0) for 0', () => {
    expect(StreamerListUtils.formatVoteCount(0)).toBe('(0)');
  });

  it('returns (999) for 999', () => {
    expect(StreamerListUtils.formatVoteCount(999)).toBe('(999)');
  });

  it('returns (1K) for 1000', () => {
    expect(StreamerListUtils.formatVoteCount(1000)).toBe('(1K)');
  });

  it('returns (12K) for 12345', () => {
    expect(StreamerListUtils.formatVoteCount(12345)).toBe('(12K)');
  });

  it('returns (100K) for 100000', () => {
    expect(StreamerListUtils.formatVoteCount(100000)).toBe('(100K)');
  });
});
