// We of course want to verify that a user is able
// to access a certain route (ie. only their account id).
// This middleare has to come after the verifyToken middleware.
module.exports = verifyRoute = (req, res, next) => {
  // first we'll pull the id from the request parameters
  const { id } = req.params;

  // then since we're passing the decoded jwt token in req.user
  // we can compare the id from the params and the id from the decoded token
  if (id != req.user.id) {
    // if they don't match, we'll reject
    res.status(401).json({ message: 'Unauthorized Access' });
  }
  // if they do match, then this user is authorized to access this route
  next();
};
