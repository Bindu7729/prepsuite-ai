const { calculateAssessmentScore } = require('../utils/scoreCalculator');

describe('Assessment Score Calculator', () => {
  it('calculates weighted score and accuracy for mixed submissions', () => {
    const submissions = [
      { difficulty: 'Easy', isCorrect: true },
      { difficulty: 'Medium', isCorrect: true },
      { difficulty: 'Hard', isCorrect: false }
    ];

    const result = calculateAssessmentScore(submissions);

    expect(result.totalScore).toBe(35); // 10 + 25
    expect(result.maxPossibleScore).toBe(85); // 10 + 25 + 50
    expect(result.correctCount).toBe(2);
    expect(result.totalCount).toBe(3);
    expect(result.accuracy).toBe(67);
  });

  it('handles empty submissions gracefully with zero defaults', () => {
    const result = calculateAssessmentScore([]);

    expect(result.totalScore).toBe(0);
    expect(result.accuracy).toBe(0);
    expect(result.percentile).toBe(0);
  });
});
