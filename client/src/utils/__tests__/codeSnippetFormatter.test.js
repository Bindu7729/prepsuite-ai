import { describe, it, expect } from 'vitest';
import { formatCodeSnippet, generateMarkdownCodeBlock } from '../codeSnippetFormatter';

describe('Code Snippet Formatter Utility', () => {
  it('strips redundant surrounding blank lines and trailing spaces', () => {
    const raw = '\n\n   const a = 10;   \n   const b = 20;   \n\n';
    const formatted = formatCodeSnippet(raw);

    expect(formatted).toBe('   const a = 10;\n   const b = 20;');
  });

  it('generates fenced markdown code block with appropriate language tag', () => {
    const code = 'def hello():\n    print("World")';
    const md = generateMarkdownCodeBlock(code, 'python');

    expect(md.startsWith('```python\n')).toBe(true);
    expect(md.endsWith('\n```')).toBe(true);
    expect(md).toContain('def hello():');
  });
});
