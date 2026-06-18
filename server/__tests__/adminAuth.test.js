const { requireAdminRole } = require('../middleware/adminAuth');

describe('Admin Role Authorization Middleware', () => {
  it('allows access for users with admin role', () => {
    const req = { user: { id: 'admin1', role: 'admin' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    requireAdminRole(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });

  it('rejects candidates without admin privileges with HTTP 403', () => {
    const req = { user: { id: 'user1', role: 'candidate' } };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    requireAdminRole(req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ message: expect.stringContaining('Access denied') })
    );
  });

  it('rejects unauthenticated requests with HTTP 401', () => {
    const req = { user: null };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();

    requireAdminRole(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
  });
});
