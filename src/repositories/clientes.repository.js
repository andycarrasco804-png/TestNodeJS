const prisma = require('../../database');

const findAll = async ({ page, limit }) => {
  const skip = (page - 1) * limit;
  const [data, total] = await Promise.all([
    prisma.cliente.findMany({
      skip,
      take: limit,
      include: { pais: { select: { nombre: true } } },
      orderBy: { id: 'asc' },
    }),
    prisma.cliente.count(),
  ]);
  return { data, total, page, limit };
};

const findById = async (id) => {
  return prisma.cliente.findUnique({
    where: { id },
    include: { pais: { select: { nombre: true } } },
  });
};

const create = async (data) => {
  return prisma.cliente.create({ data });
};

const update = async (id, data) => {
  return prisma.cliente.update({ where: { id }, data });
};

const remove = async (id) => {
  try {
    await prisma.cliente.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
};

module.exports = { findAll, findById, create, update, remove };
