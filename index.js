const express = require('express');
const db = require('./model');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.json({ mensaje: 'API de Clientes funcionando' }));

app.get('/clientes', async (req, res) => {
  try {
    const clientes = await db.getAllClientes();
    res.json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/clientes/:id', async (req, res) => {
  try {
    const cliente = await db.getClienteById(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/clientes', async (req, res) => {
  try {
    const cliente = await db.createCliente(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/clientes/:id', async (req, res) => {
  try {
    const cliente = await db.updateCliente(req.params.id, req.body);
    if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/clientes/:id', async (req, res) => {
  try {
    const deleted = await db.deleteCliente(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ mensaje: 'Cliente eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/paises', async (req, res) => {
  try {
    const paises = await db.getAllPaises();
    res.json(paises);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
