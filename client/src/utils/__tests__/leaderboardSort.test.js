import { describe, it, expect } from 'vitest';
import { rankLeaderboardCandidates } from '../leaderboardSort';

describe('Leaderboard Ranking Utility', () => {
  it('assigns Gold, Silver, and Bronze badges based on score hierarchy', () => {
    const list = [
      { id: 1, name: 'Alice', score: 850, avgSolveSeconds: 120 },
      { id: 2, name: 'Bob', score: 950, avgSolveSeconds: 110 },
      { id: 3, name: 'Charlie', score: 720, avgSolveSeconds: 90 }
    ];

    const ranked = rankLeaderboardCandidates(list);

    expect(ranked[0].name).toBe('Bob');
    expect(ranked[0].rank).toBe(1);
    expect(ranked[0].badge).toBe('Gold');

    expect(ranked[1].name).toBe('Alice');
    expect(ranked[1].badge).toBe('Silver');

    expect(ranked[2].name).toBe('Charlie');
    expect(ranked[2].badge).toBe('Bronze');
  });

  it('tie-breaks equal scores using fastest average solve time', () => {
    const list = [
      { id: 1, name: 'Alice', score: 900, avgSolveSeconds: 180 },
      { id: 2, name: 'Bob', score: 900, avgSolveSeconds: 120 }
    ];

    const ranked = rankLeaderboardCandidates(list);
    expect(ranked[0].name).toBe('Bob'); // faster solve time wins tie-break
    expect(ranked[1].name).toBe('Alice');
  });
});
