const express = require("express");
const router = express.Router();
const db = require("../config/database"); // Asegúrate de que la conexión a MySQL esté correcta

router.get("/", (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * parseInt(limit);

    const query = `
        SELECT DISTINCT dt.nombre_tienda, dt.horarios, dt.direccion, dt.descripcion
        FROM datos_tienda dt
        JOIN productos p ON dt.nombre_tienda = p.nombre_tienda
        LIMIT ? OFFSET ?;
    `;
    
    db.query(query, [parseInt(limit), offset], (err, results) => {
        if (err) {
            console.error("❌ Error en la consulta de tiendas:", err);
            return res.status(500).json({ error: "Error en el servidor" });
        }

        console.log("📌 Tiendas con productos obtenidas:", results.length);
        res.status(200).json(results);
    });
});

module.exports = router;
