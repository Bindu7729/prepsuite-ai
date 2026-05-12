import { describe, it, expect } from 'vitest';
import { filterQuestions } from '../filterQuestions';

describe('Filter Questions Utility', () => {
  const mockQuestions = [
    { id: 1, title: 'Binary Search Implementation', topic: 'Algorithms', difficulty: 'Easy', isCompleted: true },
    { id: 2, title: 'Invert Binary Tree', topic: 'Data Structures', difficulty: 'Medium', isCompleted: false },
    { id: 3, title: 'LRU Cache Design', topic: 'System Design', difficulty: 'Hard', isCompleted: false }
  ];

  it('filters questions by topic', () => {
    const results = filterQuestions(mockQuestions, { topic: 'Algorithms' });
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe(1);
  });

  it('filters questions by difficulty level', () => {
    const results = filterQuestions(mockQuestions, { difficulty: 'Hard' });
    expect(results).toHaveLength(1);
    expect(results[0].title).toBe('LRU Cache Design');
  });

  it('filters questions by free text search query', () => {
    const results = filterQuestions(mockQuestions, { searchQuery: 'Tree' });
    expect(results).toHaveLength(1);
    expect(results[0].id).toBe(2);
  });

  it('filters questions by completion status', () => {
    const completed = filterQuestions(mockQuestions, { completed: true });
    expect(completed).toHaveLength(1);
    const pending = filterQuestions(mockQuestions, { completed: false });
    expect(pending).toHaveLength(2);
  });
});
