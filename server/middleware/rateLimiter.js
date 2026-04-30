function createRateLimiter({ windowMs = 60000, maxRequests = 10 } = {}) {
  const requests = new Map();

  return function rateLimiter(req, res, next) {
    const ip = req.ip || req.connection?.remoteAddress || '127.0.0.1';
    const now = Date.now();
    const timestamps = requests.get(ip) || [];

    // Filter out timestamps outside the active sliding window
    const recent = timestamps.filter(t => now - t < windowMs);

    if (recent.length >= maxRequests) {
      return res.status(429).json({
        success: false,
        message: 'Too many requests. Please wait before submitting again.',
        retryAfterMs: windowMs - (now - recent[0])
      });
    }

    recent.push(now);
    requests.set(ip, recent);
    next();
  };
}

module.exports = { createRateLimiter };
