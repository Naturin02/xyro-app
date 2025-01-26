const express = require("express");
const router = express.Router();

// Endpoint para verificar conexión
router.get("/", (req, res) => {
  res.json({ message: "API funcionando correctamente 🚀" });
});

// Endpoint para login (POST porque enviamos datos)
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@example.com" && password === "123456") {
    res.status(200).json({ message: "Inicio de sesión exitoso", token: "fake-jwt-token" });
  } else {
    res.status(401).json({ message: "Credenciales incorrectas" });
  }
});

// Endpoint para registro de usuarios
router.post("/register", (req, res) => {
  const { email, password, username } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }
  res.status(201).json({ message: "Usuario registrado correctamente" });
});

// Exportar rutas
module.exports = router;
