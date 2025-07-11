exports.adminProtect = (req, res, next) => {
  if (!req.user?.isAdmin) {
    return res.status(403).json({ message: 'Only admins can perform this action.' });
  }
  next();
};