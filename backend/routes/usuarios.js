const express = require('express');
const db = require('../config/database'); // Conexión a MySQL

const router = express.Router();

// 🔹 Obtener todos los usuarios
router.get('/', (req, res) => {
    db.query('SELECT * FROM usuarios', (err, results) => {
        if (err) {
            console.error("❌ Error obteniendo usuarios:", err);
            res.status(500).json({ error: "Error en el servidor" });
            return;
        }
        res.json(results);
    });
});

// 🔹 Registrar un nuevo usuario
router.post('/', (req, res) => {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    const sql = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
    db.query(sql, [nombre, email, password], (err, result) => {
        if (err) {
            console.error("❌ Error registrando usuario:", err);
            res.status(500).json({ error: "Error en el servidor" });
            return;
        }
        res.json({ message: "✅ Usuario registrado con éxito", id: result.insertId });
    });
});

module.exports = router;
