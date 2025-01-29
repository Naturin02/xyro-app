const express = require("express");
const router = express.Router();
const db = require("../config/database");

// 📌 Ruta de prueba
router.get("/", (req, res) => {
    res.json({ message: "Ruta de usuarios funcionando correctamente" });
});

router.post("/registro", (req, res) => {
    let { nombre, correo, contrasena, nombre_usuario } = req.body;

    // 🔹 Validación de datos
    if (!nombre || !correo || !contrasena || !nombre_usuario) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // 🔹 Query para insertar usuario en la base de datos (sin la fecha de nacimiento)
    // const sql = "INSERT INTO usuarios (nombre, correo, contrasena, nombre_usuario) VALUES (?, ?, ?, ?)";

    const sql = "SELECT * FROM  usuarios";

    db.query(sql, [nombre, correo, contrasena, nombre_usuario], (err, result) => {
        if (err) {
            console.error("❌ Error al registrar usuario:", err);
            return res.status(500).json({ error: "Error al registrar usuario" });
        }
        res.status(201).json({ message: "Usuario registrado exitosamente" });
    });
});

module.exports = router;
