const prisma = require('./database');

const getAllClientes = async () => {
  return prisma.cliente.findMany({
    include: { pais: { select: { nombre: true } } },
    orderBy: { id: 'asc' },
  });
};

const getClienteById = async (id) => {
  return prisma.cliente.findUnique({
    where: { id: Number(id) },
    include: { pais: { select: { nombre: true } } },
  });
};

const createCliente = async (data) => {
  return prisma.cliente.create({ data });
};

const updateCliente = async (id, data) => {
  return prisma.cliente.update({ where: { id: Number(id) }, data });
};

const deleteCliente = async (id) => {
  try {
    await prisma.cliente.delete({ where: { id: Number(id) } });
    return true;
  } catch {
    return false;
  }
};

const getAllPaises = async () => {
  return prisma.pais.findMany({
    where: { activo: true },
    orderBy: { nombre: 'asc' },
  });
};

module.exports = { getAllClientes, getClienteById, createCliente, updateCliente, deleteCliente, getAllPaises };
