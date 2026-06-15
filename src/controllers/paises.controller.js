const paisesService = require('../services/paises.service');
const { success, error } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const paises = await paisesService.getAll();
    success(res, {
      data: paises,
      message: 'Países obtenidos correctamente',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll };
