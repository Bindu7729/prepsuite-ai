function sanitizeInput(str = '') {
  if (typeof str !== 'string') return '';

  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

function sanitizeObject(obj = {}) {
  if (typeof obj !== 'object' || obj === null) return obj;
  const sanitized = {};
  for (const [key, val] of Object.entries(obj)) {
    if (typeof val === 'string') {
      sanitized[key] = sanitizeInput(val);
    } else if (typeof val === 'object') {
      sanitized[key] = sanitizeObject(val);
    } else {
      sanitized[key] = val;
    }
  }
  return sanitized;
}

module.exports = { sanitizeInput, sanitizeObject };
