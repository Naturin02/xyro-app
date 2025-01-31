// routes/tiendas.js
const express = require("express");
const router = express.Router();
const db = require("../config/database"); // Conexión a la BD

// ✅ Ruta para obtener tiendas con paginación
router.get("/", (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const query = "SELECT * FROM tiendas LIMIT ? OFFSET ?";
    db.query(query, [parseInt(limit), parseInt(offset)], (err, results) => {
        if (err) {
            console.error("❌ Error al obtener tiendas:", err);
            return res.status(500).json({ error: "Error en el servidor" });
        }

        res.status(200).json(results);
    });
});

module.exports = router;