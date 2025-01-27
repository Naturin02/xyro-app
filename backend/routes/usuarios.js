const express = require("express");
const db = require("../database");
const router = express.Router();
const bcrypt = require("bcrypt");

// Registro de usuario
router.post("/register", async (req, res) => {
  try {
    const { correo, contrasena, nombre_usuario, fecha_nacimiento } = req.body;

    // Validación básica
    if (!correo || !contrasena || !nombre_usuario || !fecha_nacimiento) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

    // Insertar usuario en la base de datos
    const query = "INSERT INTO usuarios (correo, contrasena, nombre_usuario, fecha_nacimiento) VALUES (?, ?, ?, ?)";
    db.query(query, [correo, hashedPassword, nombre_usuario, fecha_nacimiento], (err, result) => {
      if (err) {
        console.error("Error al registrar usuario:", err);
        return res.status(500).json({ error: "Error en el servidor" });
      }
      res.status(201).json({ message: "Usuario registrado exitosamente", id: result.insertId });
    });

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
