const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/dolar', async (req, res) => {
  try {
    const response = await axios.get('https://mindicador.cl/api/dolar');
    const valor = response.data.serie[0].valor;
    res.json({ valor });
  } catch (error) {
    console.error('❌ Error al consultar API del Banco Central:', error.message);
    res.status(500).json({ error: 'No se pudo obtener el valor del dólar' });
  }
});

module.exports = router;
