const express = require('express');
const router = express.Router();
const db = require('../db');

// REGISTRO
router.post('/registro', (req, res) => {
  const { nombre, correo, clave, rol } = req.body;

  const query = 'INSERT INTO usuarios (nombre, correo, clave, rol) VALUES (?, ?, ?, ?)';
  db.query(query, [nombre, correo, clave, rol || 'usuario'], (err, result) => {
    if (err) {
      console.error('❌ Error en el registro:', err);
      return res.status(500).json({ error: 'Error al registrar usuario' });
    }
    res.status(201).json({ mensaje: 'Usuario registrado exitosamente' });
  });
});

// LOGIN
router.post('/login', (req, res) => {
  const { correo, clave } = req.body;

  const query = 'SELECT * FROM usuarios WHERE correo = ? AND clave = ?';
  db.query(query, [correo, clave], (err, results) => {
    if (err) {
      console.error('❌ Error en login:', err);
      return res.status(500).json({ error: 'Error en el servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const usuario = results[0];
    res.json({ id: usuario.id, nombre: usuario.nombre, rol: usuario.rol });
  });
});

module.exports = router;
