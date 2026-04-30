const { createRateLimiter } = require('../middleware/rateLimiter');

describe('Sliding Window Rate Limiter Middleware', () => {
  it('allows requests within threshold limit', () => {
    const limiter = createRateLimiter({ windowMs: 5000, maxRequests: 3 });
    const req = { ip: '192.168.1.1' };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    limiter(req, res, next);
    limiter(req, res, next);

    expect(next).toHaveBeenCalledTimes(2);
    expect(res.status).not.toHaveBeenCalled();
  });

  it('blocks requests exceeding threshold with HTTP 429', () => {
    const limiter = createRateLimiter({ windowMs: 5000, maxRequests: 2 });
    const req = { ip: '192.168.1.2' };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    limiter(req, res, next);
    limiter(req, res, next);
    limiter(req, res, next); // 3rd request violates limit

    expect(next).toHaveBeenCalledTimes(2);
    expect(res.status).toHaveBeenCalledWith(429);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ success: false, message: expect.stringContaining('Too many requests') })
    );
  });
});
