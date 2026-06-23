const crypto = require('crypto');

function generateSessionToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

function validateTokenStructure(token, expectedLength = 64) {
  if (typeof token !== 'string') return false;
  const hexPattern = /^[0-9a-fA-F]+$/;
  return token.length === expectedLength && hexPattern.test(token);
}

module.exports = { generateSessionToken, validateTokenStructure };
