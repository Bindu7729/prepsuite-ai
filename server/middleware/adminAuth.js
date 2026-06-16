function requireAdminRole(req, res, next) {
  const user = req.user;

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }

  if (user.role !== 'admin' && user.role !== 'superadmin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied: Administrative privileges required'
    });
  }

  next();
}

module.exports = { requireAdminRole };
