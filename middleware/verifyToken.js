const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  // check header for token
  const token = req.headers.authorization;

  // if that token exists
  if (token) {
    // call jwt verify
    jwt.verify(
      // pass in the token
      token,
      // pass in our secret
      secret,
      // takes a call back, with an error and decoded token
      (err, decoded) => {
        // if an error exists (altered token, etc.)
        if (err) {
          // reject
          res.status(401).json({
            message: 'Unauthorized access, please try signing in again'
          });
        } else {
          // if not, add the decoded token to the request
          req.user = decoded;
          // proceed to the next function
          next();
        }
      }
    );
  } else {
    // if the token doesn't exist, advise the user to authenticate
    res.status(401).json({ message: 'Please sign in before proceeding' });
  }
};
