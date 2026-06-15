const success = (res, { data = null, message = 'OK', statusCode = 200, ...extra } = {}) => {
  const body = { success: true, message };
  if (data !== null) body.data = data;
  Object.assign(body, extra);
  return res.status(statusCode).json(body);
};

const error = (res, { message = 'Error interno', statusCode = 500, errors = null } = {}) => {
  const body = { success: false, error: message };
  if (errors) body.errors = errors;
  return res.status(statusCode).json(body);
};

module.exports = { success, error };
