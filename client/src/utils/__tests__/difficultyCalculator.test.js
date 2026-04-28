import { describe, it, expect } from 'vitest';
import { calculateDifficultyTier, formatDifficultyBadgeColor } from '../difficultyCalculator';

describe('Difficulty Calculator Utility', () => {
  it('classifies problems with high acceptance rate as Easy', () => {
    expect(calculateDifficultyTier(85, 10)).toBe('Easy');
    expect(calculateDifficultyTier(70, 15)).toBe('Easy');
  });

  it('classifies problems with low acceptance rate or high solve time as Hard', () => {
    expect(calculateDifficultyTier(25, 30)).toBe('Hard');
    expect(calculateDifficultyTier(50, 50)).toBe('Hard');
  });

  it('classifies problems within standard range or invalid input as Medium', () => {
    expect(calculateDifficultyTier(55, 20)).toBe('Medium');
    expect(calculateDifficultyTier(-5, 20)).toBe('Medium');
    expect(calculateDifficultyTier('invalid', 20)).toBe('Medium');
  });

  it('provides matching badge color classes for each tier', () => {
    expect(formatDifficultyBadgeColor('Easy')).toContain('emerald');
    expect(formatDifficultyBadgeColor('Hard')).toContain('rose');
    expect(formatDifficultyBadgeColor('Medium')).toContain('amber');
  });
});
