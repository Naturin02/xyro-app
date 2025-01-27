const express = require("express");
const router = express.Router();
const db = require("../config/database"); // Importa la conexión a MySQL

// 📌 Ruta de prueba para verificar que las rutas funcionan
router.get("/", (req, res) => {
    res.json({ message: "Ruta de usuarios funcionando correctamente" });
});

// 📌 Ruta para registrar usuarios
router.post("/registro", (req, res) => {
    const { correo, contrasena, nombre_usuario, fecha_nacimiento } = req.body;

    // Validación de datos
    if (!correo || !contrasena || !nombre_usuario || !fecha_nacimiento) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Query para insertar usuario en la base de datos
    const sql = "INSERT INTO usuarios (correo, contrasena, nombre_usuario, fecha_nacimiento) VALUES (?, ?, ?, ?)";
    
    db.query(sql, [correo, contrasena, nombre_usuario, fecha_nacimiento], (err, result) => {
        if (err) {
            console.error("❌ Error al registrar usuario:", err);
            return res.status(500).json({ error: "Error al registrar usuario" });
        }
        res.status(201).json({ message: "Usuario registrado exitosamente" });
    });
});

module.exports = router;
