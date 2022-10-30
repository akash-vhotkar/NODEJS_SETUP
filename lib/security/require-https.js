'use strict';

module.exports = function requireHTTPS(req, res, next) {
  if (
    !req.secure &&
    req.get('x-forwarded-proto') !== 'https' &&
    process.env.NODE_ENV !== 'development' &&
    process.env.NODE_ENV !== 'localhost'
  ) {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
};
