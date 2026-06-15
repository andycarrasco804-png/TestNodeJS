const { error } = require('../utils/response');

const errorHandler = (err, req, res, next) => {
  console.error(err);
  error(res, { message: err.message || 'Error interno del servidor' });
};

module.exports = errorHandler;
