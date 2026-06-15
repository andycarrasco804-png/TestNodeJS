const { error } = require('../utils/response');

const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.issues.map(i => ({ campo: i.path.join('.'), mensaje: i.message }));
    return error(res, { message: 'Datos inválidos', statusCode: 400, errors });
  }
  req.body = result.data;
  next();
};

const validateQuery = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.query);
  if (!result.success) {
    const errors = result.error.issues.map(i => ({ campo: i.path.join('.'), mensaje: i.message }));
    return error(res, { message: 'Parámetros inválidos', statusCode: 400, errors });
  }
  req.pagination = result.data;
  next();
};

module.exports = { validate, validateQuery };
