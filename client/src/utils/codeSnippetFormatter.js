export function formatCodeSnippet(rawCode = '', language = 'javascript') {
  if (typeof rawCode !== 'string') return '';
  const lines = rawCode.replace(/\r\n/g, '\n').split('\n');

  // Strip trailing whitespace per line
  const cleanedLines = lines.map(l => l.trimEnd());

  // Remove leading and trailing empty lines
  while (cleanedLines.length > 0 && cleanedLines[0].trim() === '') {
    cleanedLines.shift();
  }
  while (cleanedLines.length > 0 && cleanedLines[cleanedLines.length - 1].trim() === '') {
    cleanedLines.pop();
  }

  return cleanedLines.join('\n');
}

export function generateMarkdownCodeBlock(code = '', language = 'python') {
  const formatted = formatCodeSnippet(code, language);
  return `\`\`\`${language.toLowerCase()}\n${formatted}\n\`\`\``;
}
