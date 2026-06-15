const clientesRepository = require('../repositories/clientes.repository');

const getAll = async (page, limit) => {
  return clientesRepository.findAll({ page, limit });
};

const getById = async (id) => {
  const idNum = Number(id);
  const cliente = await clientesRepository.findById(idNum);
  return cliente;
};

const create = async (data) => {
  return clientesRepository.create(data);
};

const update = async (id, data) => {
  const idNum = Number(id);
  return clientesRepository.update(idNum, data);
};

const remove = async (id) => {
  const idNum = Number(id);
  return clientesRepository.remove(idNum);
};

module.exports = { getAll, getById, create, update, remove };
