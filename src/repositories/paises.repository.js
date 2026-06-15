const prisma = require('../../database');

const findAllActivos = async () => {
  return prisma.pais.findMany({
    where: { activo: true },
    orderBy: { nombre: 'asc' },
  });
};

module.exports = { findAllActivos };
