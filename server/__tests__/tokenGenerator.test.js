const { generateSessionToken, validateTokenStructure } = require('../utils/tokenGenerator');

describe('Cryptographic Session Token Utility', () => {
  it('generates secure hexadecimal tokens with requested byte length', () => {
    const token = generateSessionToken(32);
    expect(token).toHaveLength(64); // 32 bytes in hex = 64 chars
    expect(validateTokenStructure(token, 64)).toBe(true);
  });

  it('rejects malformed non-hex or mismatched length tokens', () => {
    expect(validateTokenStructure('short', 64)).toBe(false);
    expect(validateTokenStructure('xyz!@#'.repeat(10), 60)).toBe(false);
  });
});
