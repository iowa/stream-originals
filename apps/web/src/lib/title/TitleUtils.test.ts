import { describe, expect, it } from 'vitest';
import { TitleUtils } from './TitleUtils';
import { AppConstants } from "@/lib/AppConstants";
import { Title } from "@repo/common";

describe('TitleUtils', () => {
  describe('getYearRange', () => {
    it('returns year for valid premiere', () => {
      expect(TitleUtils.getYearRange('2020-01-01')).toBe('2020');
    });
    it('returns year range for valid premiere and finale', () => {
      expect(TitleUtils.getYearRange('2020-01-01', '2022-01-01')).toBe('2020–2022');
    });
    it('returns NOT_AVAILABLE for invalid premiere', () => {
      expect(TitleUtils.getYearRange(null)).toBe(AppConstants.NOT_AVAILABLE);
      expect(TitleUtils.getYearRange('invalid-date')).toBe(AppConstants.NOT_AVAILABLE);
    });
    it('returns one year for same premiere finale', () => {
      expect(TitleUtils.getYearRange('2020-01-01', '2020-01-01')).toBe('2020');
    });
  });

  describe('formatVoteCount', () => {
    it('returns NOT_AVAILABLE for null or undefined', () => {
      expect(TitleUtils.formatVoteCount(null)).toBe(`(${AppConstants.NOT_AVAILABLE})`);
      expect(TitleUtils.formatVoteCount(undefined)).toBe(`(${AppConstants.NOT_AVAILABLE})`);
    });
    it('returns raw count for < 1000', () => {
      expect(TitleUtils.formatVoteCount(999)).toBe('(999)');
    });
    it('returns K format for >= 1000', () => {
      expect(TitleUtils.formatVoteCount(1000)).toBe('(1K)');
      expect(TitleUtils.formatVoteCount(2500)).toBe('(2K)');
    });
  });

  describe('runtime', () => {
    it('returns NOT_AVAILABLE for null, undefined, or <= 0', () => {
      expect(TitleUtils.runtime(null)).toBe(AppConstants.NOT_AVAILABLE);
      expect(TitleUtils.runtime(0)).toBe(AppConstants.NOT_AVAILABLE);
      expect(TitleUtils.runtime(-10)).toBe(AppConstants.NOT_AVAILABLE);
    });
    it('returns minutes for < 1 hour', () => {
      expect(TitleUtils.runtime(1800)).toBe('30m');
    });
    it('returns hours for exact hours', () => {
      expect(TitleUtils.runtime(7200)).toBe('2h');
    });
    it('returns hours and minutes for mixed', () => {
      expect(TitleUtils.runtime(7500)).toBe('2h 5m');
    });
  });

  describe('formatTypeDetails', () => {
    const baseTitle = { type: 'tvSeries', seasons: null, episodes: null } as Title;
    it('returns capitalized type only', () => {
      expect(TitleUtils.formatTypeDetails({ ...baseTitle } as Title)).toBe('Tv Series');
    });
    it('returns type with episodes', () => {
      expect(TitleUtils.formatTypeDetails({
        ...baseTitle,
        episodes: 10
      } as Title)).toBe('Tv Series (E10)');
    });
    it('returns type with seasons and episodes', () => {
      expect(TitleUtils.formatTypeDetails({
        ...baseTitle,
        seasons: 2,
        episodes: 20
      } as Title)).toBe('Tv Series (S2 E20)');
    });
    it('returns type with seasons only (no episodes)', () => {
      expect(TitleUtils.formatTypeDetails({ ...baseTitle, seasons: 3 } as Title)).toBe('Tv Series');
    });
    it('handles type capitalization', () => {
      expect(TitleUtils.formatTypeDetails({ ...baseTitle, type: 'movie' } as Title)).toBe('Movie');
    });
    it('returns type for null/undefined seasons/episodes', () => {
      expect(TitleUtils.formatTypeDetails({
        ...baseTitle,
        seasons: null,
        episodes: null
      } as Title)).toBe('Tv Series');
    });
  });

});
