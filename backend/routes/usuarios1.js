const express = require("express");
const router = express.Router();
const db = require("../config/database"); // Conexión a la BD

// ✅ Ruta de prueba
router.get("/test", (req, res) => {
    res.json({ message: "✅ Ruta de prueba funcionando" });
});

// ✅ Ruta para registrar usuarios con manejo de duplicados
router.post("/registro", (req, res) => {
    console.log("📌 Recibida solicitud en /api/usuarios/registro");

    const { nombre, apellido, correo, contrasena, telefono, nombre_usuario } = req.body;

    if (!nombre || !apellido || !correo || !contrasena || !nombre_usuario) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // 🚀 **Verificar si el correo ya existe en la BD**
    const checkQuery = "SELECT * FROM usuarios WHERE correo = ?";
    db.query(checkQuery, [correo], (err, results) => {
        if (err) {
            console.error("❌ Error al verificar usuario:", err);
            return res.status(500).json({ error: "Error en el servidor" });
        }

        if (results.length > 0) {
            return res.status(409).json({ error: "El correo ya está registrado, intenta con otro" });
        }

        // ✅ Insertar usuario si no existe
        const insertQuery = "INSERT INTO usuarios (nombre, apellido, correo, contrasena, telefono, nombre_usuario) VALUES (?, ?, ?, ?, ?, ?)";
        db.query(insertQuery, [nombre, apellido, correo, contrasena, telefono, nombre_usuario], (err, result) => {
            if (err) {
                console.error("❌ Error al registrar usuario:", err);
                return res.status(500).json({ error: err.sqlMessage || "Error en el servidor" });
            }
            res.status(201).json({ message: "✅ Usuario registrado con éxito" });
        });
    });
});
router.post("/login", (req, res) => {
    console.log("📌 Recibida solicitud en /api/usuarios/login");

    const { correo, contrasena } = req.body;
    if (!correo || !contrasena) {
        return res.status(400).json({ error: "Correo y contraseña son obligatorios" });
    }

    const query = "SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?";
    db.query(query, [correo, contrasena], (err, results) => {
        if (err) {
            console.error("❌ Error al consultar usuario:", err);
            return res.status(500).json({ error: "Error en el servidor" });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: "Correo o contraseña incorrectos" });
        }

        res.status(200).json({ message: "✅ Inicio de sesión exitoso", usuario: results[0] });
    });
});


module.exports = router;
