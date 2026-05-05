import { describe, it, expect } from 'vitest';
import { formatRemainingTime, isTimeCritical } from '../quizTimer';

describe('Quiz Timer Utility', () => {
  it('formats remaining seconds to MM:SS string correctly', () => {
    expect(formatRemainingTime(125)).toBe('02:05');
    expect(formatRemainingTime(60)).toBe('01:00');
    expect(formatRemainingTime(9)).toBe('00:09');
    expect(formatRemainingTime(0)).toBe('00:00');
    expect(formatRemainingTime(-10)).toBe('00:00');
  });

  it('identifies critical time thresholds when under 2 minutes', () => {
    expect(isTimeCritical(60, 1800)).toBe(true);
    expect(isTimeCritical(150, 1800)).toBe(false);
    expect(isTimeCritical(0, 1800)).toBe(true);
  });
});
