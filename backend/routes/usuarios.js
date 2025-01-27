const express = require("express");
const router = express.Router();
const db = require("../config/database");

// 📌 Ruta de prueba
router.get("/", (req, res) => {
    res.json({ message: "Ruta de usuarios funcionando correctamente" });
});

router.post("/registro", (req, res) => {
    let { nombre, correo, contrasena, nombre_usuario, fecha_nacimiento } = req.body;

    // 🔹 Validación de datos
    if (!nombre || !correo || !contrasena || !nombre_usuario || !fecha_nacimiento) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // 📌 Convertir fecha de "DD/MM/YYYY" a "YYYY-MM-DD"
    const partesFecha = fecha_nacimiento.split("/");
    if (partesFecha.length === 3) {
        fecha_nacimiento = `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;
    } else {
        return res.status(400).json({ error: "Formato de fecha inválido. Usa DD/MM/YYYY" });
    }

    // 🔹 Query para insertar usuario en la base de datos
    const sql = "INSERT INTO usuarios (nombre, correo, contrasena, nombre_usuario, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)";

    db.query(sql, [nombre, correo, contrasena, nombre_usuario, fecha_nacimiento], (err, result) => {
        if (err) {
            console.error("❌ Error al registrar usuario:", err);
            return res.status(500).json({ error: "Error al registrar usuario" });
        }
        res.status(201).json({ message: "Usuario registrado exitosamente" });
    });
});


module.exports = router;
