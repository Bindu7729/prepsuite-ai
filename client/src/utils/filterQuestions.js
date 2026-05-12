export function filterQuestions(questions = [], filters = {}) {
  const { topic, difficulty, completed, searchQuery } = filters;

  return questions.filter(q => {
    if (topic && topic !== 'All' && q.topic?.toLowerCase() !== topic.toLowerCase()) {
      return false;
    }
    if (difficulty && difficulty !== 'All' && q.difficulty?.toLowerCase() !== difficulty.toLowerCase()) {
      return false;
    }
    if (completed !== undefined && Boolean(q.isCompleted) !== Boolean(completed)) {
      return false;
    }
    if (searchQuery && searchQuery.trim()) {
      const qText = (q.title || q.question || '').toLowerCase();
      if (!qText.includes(searchQuery.trim().toLowerCase())) {
        return false;
      }
    }
    return true;
  });
}
