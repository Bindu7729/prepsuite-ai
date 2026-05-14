const { sanitizeInput, sanitizeObject } = require('../utils/sanitizer');

describe('Input Sanitizer Utility', () => {
  it('escapes hazardous HTML tags and quotes from string input', () => {
    const raw = '<script>alert("xss")</script>';
    const cleaned = sanitizeInput(raw);

    expect(cleaned).not.toContain('<script>');
    expect(cleaned).toContain('&lt;script&gt;');
  });

  it('recursively sanitizes nested object payload properties', () => {
    const payload = {
      name: '<b>Bindu</b>',
      meta: {
        bio: 'Developer <p>test</p>'
      },
      count: 10
    };

    const sanitized = sanitizeObject(payload);

    expect(sanitized.name).toBe('&lt;b&gt;Bindu&lt;&#x2F;b&gt;');
    expect(sanitized.meta.bio).toBe('Developer &lt;p&gt;test&lt;&#x2F;p&gt;');
    expect(sanitized.count).toBe(10);
  });
});
