/* eslint-disable no-unused-vars */
const errorHandlerMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  res.status(status).json({ error: message });
};
/* eslint-enable no-unused-vars */

module.exports = errorHandlerMiddleware;
