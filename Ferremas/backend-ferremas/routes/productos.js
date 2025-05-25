const express = require('express');
const router = express.Router();
const db = require('../db');

// Obtener todos los productos
router.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) return res.status(500).json({ error: 'Error en la base de datos' });
    res.json(results);
  });
});

// Crear un nuevo producto
router.post('/', (req, res) => {
  const { nombre, marca, precio, stock, imagen_url } = req.body;
  const query = 'INSERT INTO productos (nombre, marca, precio, stock, imagen_url) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [nombre, marca, precio, stock, imagen_url], (err, result) => {
    if (err) return res.status(500).json({ error: 'Error al agregar producto' });
    res.status(201).json({ mensaje: 'Producto agregado', id: result.insertId });
  });
});

// Editar un producto por ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, marca, precio, stock, imagen_url } = req.body;
  const query = 'UPDATE productos SET nombre = ?, marca = ?, precio = ?, stock = ?, imagen_url = ? WHERE id = ?';
  db.query(query, [nombre, marca, precio, stock, imagen_url, id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al actualizar producto' });
    res.json({ mensaje: 'Producto actualizado' });
  });
});

// Eliminar producto por ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM productos WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) return res.status(500).json({ error: 'Error al eliminar producto' });
    res.json({ mensaje: 'Producto eliminado' });
  });
});
module.exports = router;
