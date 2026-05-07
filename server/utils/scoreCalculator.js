function calculateAssessmentScore(submissions = [], weights = {}) {
  const defaultWeights = { Easy: 10, Medium: 25, Hard: 50 };
  const effectiveWeights = { ...defaultWeights, ...weights };

  let totalScore = 0;
  let maxPossibleScore = 0;
  let correctCount = 0;

  for (const sub of submissions) {
    const weight = effectiveWeights[sub.difficulty] || 20;
    maxPossibleScore += weight;
    if (sub.isCorrect) {
      totalScore += weight;
      correctCount++;
    }
  }

  const accuracy = submissions.length > 0 ? Math.round((correctCount / submissions.length) * 100) : 0;
  const percentile = maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;

  return {
    totalScore,
    maxPossibleScore,
    correctCount,
    totalCount: submissions.length,
    accuracy,
    percentile
  };
}

module.exports = { calculateAssessmentScore };
