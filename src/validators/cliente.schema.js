const { z } = require('zod');

const createClienteSchema = z.object({
  nombre: z.string().min(2, 'Nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().optional(),
  direccion: z.string().optional(),
  ciudad: z.string().optional(),
  paisId: z.number().int().positive('País inválido').optional(),
  codigoPostal: z.string().optional(),
});

const updateClienteSchema = z.object({
  nombre: z.string().min(2).optional(),
  email: z.string().email().optional(),
  telefono: z.string().optional(),
  direccion: z.string().optional(),
  ciudad: z.string().optional(),
  paisId: z.number().int().positive().optional(),
  codigoPostal: z.string().optional(),
  estado: z.enum(['activo', 'inactivo']).optional(),
});

module.exports = { createClienteSchema, updateClienteSchema };
