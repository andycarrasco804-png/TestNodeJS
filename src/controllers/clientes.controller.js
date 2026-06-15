const clientesService = require('../services/clientes.service');
const { success, error } = require('../utils/response');

const getAll = async (req, res, next) => {
  try {
    const { page, limit } = req.pagination;
    const result = await clientesService.getAll(page, limit);
    success(res, {
      data: result.data,
      message: 'Clientes obtenidos correctamente',
      meta: { total: result.total, page: result.page, limit: result.limit },
    });
  } catch (err) {
    next(err);
  }
};

const getById = async (req, res, next) => {
  try {
    const cliente = await clientesService.getById(req.params.id);
    if (!cliente) return error(res, { message: 'Cliente no encontrado', statusCode: 404 });
    success(res, {
      data: cliente,
      message: 'Cliente obtenido correctamente',
    });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const cliente = await clientesService.create(req.body);
    success(res, {
      data: cliente,
      message: 'Cliente creado correctamente',
      statusCode: 201,
    });
  } catch (err) {
    if (err.code === 'P2002') {
      return error(res, { message: 'El email ya está registrado', statusCode: 409 });
    }
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const cliente = await clientesService.update(req.params.id, req.body);
    if (!cliente) return error(res, { message: 'Cliente no encontrado', statusCode: 404 });
    success(res, {
      data: cliente,
      message: 'Cliente actualizado correctamente',
    });
  } catch (err) {
    if (err.code === 'P2025') {
      return error(res, { message: 'Cliente no encontrado', statusCode: 404 });
    }
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const deleted = await clientesService.remove(req.params.id);
    if (!deleted) return error(res, { message: 'Cliente no encontrado', statusCode: 404 });
    success(res, { message: 'Cliente eliminado correctamente' });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getById, create, update, remove };
