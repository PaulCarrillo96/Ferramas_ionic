const express = require('express');
const { WebpayPlus, IntegrationApiKeys, IntegrationCommerceCodes, Environment } = require('transbank-sdk');
const router = express.Router();

const options = {
  commerceCode: IntegrationCommerceCodes.WEBPAY_PLUS,
  apiKey: IntegrationApiKeys.WEBPAY,
  environment: Environment.Integration
};

// Crear nueva transacción
router.post('/crear-transaccion', async (req, res) => {
  try {
    const { monto, ordenCompra } = req.body;

    const order = String(ordenCompra || `ORD-${Date.now()}`);
    const sessionId = `session-${Date.now()}`;
    const returnUrl = 'http://localhost:3000/api/webpay/respuesta'; // Redirige a tu backend

    console.log('✅ Enviando a Webpay:', { monto, order, sessionId, returnUrl });

    const response = await new WebpayPlus.Transaction(options).create(
      order,
      sessionId,
      parseInt(monto),
      returnUrl
    );

    res.json({
      url: response.url,
      token: response.token
    });

  } catch (error) {
    console.error('❌ Error al crear transacción:');
    if (error.response?.data) {
      console.error('🧨 Detalle:', error.response.data);
    } else if (error.message) {
      console.error('🧨 Mensaje:', error.message);
    } else {
      console.error(error);
    }

    res.status(500).json({ error: 'Error al generar la transacción' });
  }
});

// Confirmación desde Webpay (POST)
router.post('/respuesta', async (req, res) => {
  const token = req.body.token_ws;

  if (!token) {
    return res.redirect('http://localhost:8100/pago-error');
  }

  try {
    const result = await new WebpayPlus.Transaction(options).commit(token);

    if (result.response_code === 0) {
      console.log('✅ Transacción aprobada:', result);
      return res.redirect('http://localhost:8100/pago-exitoso');
    } else {
      console.warn('⚠️ Transacción rechazada:', result);
      return res.redirect('http://localhost:8100/pago-error');
    }

  } catch (error) {
    console.error('❌ Error al confirmar pago:', error.message);
    return res.redirect('http://localhost:8100/pago-error');
  }
});

// Ruta GET /respuesta para prevenir error "Cannot GET"
router.get('/respuesta', (req, res) => {
  res.redirect('http://localhost:8100/pago-error');
});

module.exports = router;
