export function rankLeaderboardCandidates(candidates = []) {
  if (!Array.isArray(candidates) || candidates.length === 0) {
    return [];
  }

  // Sort descending by score, tie-break by fastest average time
  const sorted = [...candidates].sort((a, b) => {
    const diff = (b.score || 0) - (a.score || 0);
    if (diff !== 0) return diff;
    return (a.avgSolveSeconds || 0) - (b.avgSolveSeconds || 0);
  });

  return sorted.map((candidate, idx) => {
    const rank = idx + 1;
    let badge = 'Participant';
    if (rank === 1) badge = 'Gold';
    else if (rank === 2) badge = 'Silver';
    else if (rank === 3) badge = 'Bronze';
    else if (rank <= 10) badge = 'Top 10';

    return {
      ...candidate,
      rank,
      badge
    };
  });
}
