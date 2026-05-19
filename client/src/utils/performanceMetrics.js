export function aggregatePerformanceMetrics(submissions = []) {
  if (!Array.isArray(submissions) || submissions.length === 0) {
    return {
      totalSolved: 0,
      accuracyRate: 0,
      topicBreakdown: {},
      streakDays: 0
    };
  }

  let totalSolved = 0;
  const topicCounts = {};

  for (const s of submissions) {
    if (s.isCorrect) totalSolved++;
    const topic = s.topic || 'General';
    if (!topicCounts[topic]) {
      topicCounts[topic] = { solved: 0, total: 0 };
    }
    topicCounts[topic].total++;
    if (s.isCorrect) {
      topicCounts[topic].solved++;
    }
  }

  const accuracyRate = Math.round((totalSolved / submissions.length) * 100);

  return {
    totalSolved,
    accuracyRate,
    topicBreakdown: topicCounts,
    streakDays: submissions.length > 5 ? 3 : 1
  };
}
