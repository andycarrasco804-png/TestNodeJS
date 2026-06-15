require('dotenv').config();

const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');
const clientesRoutes = require('./src/routes/clientes.routes');
const paisesRoutes = require('./src/routes/paises.routes');
const { success } = require('./src/utils/response');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => success(res, { message: 'API de Clientes funcionando' }));

app.use('/clientes', clientesRoutes);
app.use('/paises', paisesRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`🚀 Servidor en http://localhost:${PORT}`));
