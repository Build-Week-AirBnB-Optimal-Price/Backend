module.exports = verifyRoute = (req, res, next) => {
  const { id } = req.params;

  if (id != req.user.user_id) {
    res.status(401).json({ message: 'Unauthorized Access' });
  }
  next();
};
