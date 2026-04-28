export function calculateDifficultyTier(acceptanceRate, avgSolveTimeMinutes) {
  if (typeof acceptanceRate !== 'number' || acceptanceRate < 0 || acceptanceRate > 100) {
    return 'Medium';
  }

  if (acceptanceRate >= 70 && (!avgSolveTimeMinutes || avgSolveTimeMinutes <= 15)) {
    return 'Easy';
  }

  if (acceptanceRate <= 35 || (avgSolveTimeMinutes && avgSolveTimeMinutes >= 45)) {
    return 'Hard';
  }

  return 'Medium';
}

export function formatDifficultyBadgeColor(tier) {
  switch (tier?.toLowerCase()) {
    case 'easy':
      return 'bg-emerald-100 text-emerald-800 border-emerald-300';
    case 'hard':
      return 'bg-rose-100 text-rose-800 border-rose-300';
    case 'medium':
    default:
      return 'bg-amber-100 text-amber-800 border-amber-300';
  }
}
