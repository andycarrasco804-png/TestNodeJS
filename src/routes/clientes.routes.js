const { Router } = require('express');
const controller = require('../controllers/clientes.controller');
const { validate, validateQuery } = require('../middleware/validate');
const { createClienteSchema, updateClienteSchema } = require('../validators/cliente.schema');
const paginacionSchema = require('../validators/paginacion.schema');

const router = Router();

router.get('/', validateQuery(paginacionSchema), controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validate(createClienteSchema), controller.create);
router.put('/:id', validate(updateClienteSchema), controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
