const express = require('express');
const cors = require('cors');
const app = express();

// 👇 primero importa tus rutas
const productosRoutes = require('./routes/productos');
const usuariosRoutes = require('./routes/usuarios');
const webpayRoutes = require('./routes/webpay.routes');
const divisasRoutes = require('./routes/divisas.routes');

// luego configura middlewares
app.use(cors());
app.use(express.json());
app.use(express.json());

// después registra las rutas
app.use('/api/productos', productosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/webpay', webpayRoutes);
app.use('/api/divisas', divisasRoutes);

// iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);

  
});
