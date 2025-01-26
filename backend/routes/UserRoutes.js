const express = require("express");
const router = express.Router();

// 🟢 Ruta para registrar un usuario (Ejemplo)
router.post("/register", (req, res) => {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
        return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    // Simulación de respuesta
    res.status(201).json({ message: "Usuario registrado correctamente", usuario: { nombre, email } });
});

// 🔵 Ruta para iniciar sesión (Ejemplo)
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email y contraseña son requeridos" });
    }

    // Simulación de autenticación exitosa
    res.status(200).json({ message: "Inicio de sesión exitoso", token: "jwt_token_simulado" });
});

// Exportar rutas
module.exports = router;
