const paisesRepository = require('../repositories/paises.repository');

const getAll = async () => {
  return paisesRepository.findAllActivos();
};

module.exports = { getAll };
