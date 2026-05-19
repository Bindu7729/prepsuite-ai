import { describe, it, expect } from 'vitest';
import { aggregatePerformanceMetrics } from '../performanceMetrics';

describe('Performance Metrics Aggregator', () => {
  it('calculates topic breakdown and overall accuracy rate', () => {
    const submissions = [
      { topic: 'Algorithms', isCorrect: true },
      { topic: 'Algorithms', isCorrect: false },
      { topic: 'Databases', isCorrect: true }
    ];

    const metrics = aggregatePerformanceMetrics(submissions);

    expect(metrics.totalSolved).toBe(2);
    expect(metrics.accuracyRate).toBe(67);
    expect(metrics.topicBreakdown.Algorithms.solved).toBe(1);
    expect(metrics.topicBreakdown.Algorithms.total).toBe(2);
    expect(metrics.topicBreakdown.Databases.solved).toBe(1);
  });

  it('handles empty submissions gracefully with zero defaults', () => {
    const metrics = aggregatePerformanceMetrics([]);

    expect(metrics.totalSolved).toBe(0);
    expect(metrics.accuracyRate).toBe(0);
    expect(metrics.topicBreakdown).toEqual({});
  });
});
