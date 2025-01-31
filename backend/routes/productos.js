const express = require("express");
const router = express.Router();
const db = require("../config/database");

// ✅ Ruta para obtener productos por tienda
router.get("/", (req, res) => {
    let { tienda } = req.query;

    if (!tienda) {
        return res.status(400).json({ error: "Se requiere el nombre de la tienda" });
    }

    console.log(`🔍 Original: "${tienda}"`);
    console.log(`📏 Longitud antes de limpiar:`, tienda.length);

    tienda = tienda.trim(); // 🛠️ Elimina espacios y saltos de línea

    console.log(`✂️ Limpio: "${tienda}"`);
    console.log(`📏 Longitud después de limpiar:`, tienda.length);

    const query = `
        SELECT p.nombre_producto, p.descripcion, p.precio, p.stock, p.estado, p.nombre_categoria
        FROM productos p
        JOIN tiendas t ON p.nombre_tienda = t.nombre_tienda
        WHERE t.nombre_tienda = ?;
    `;

    db.query(query, [tienda], (err, results) => {
        if (err) {
            console.error("❌ Error al obtener productos:", err);
            return res.status(500).json({ error: "Error en el servidor" });
        }

        console.log(`📦 Productos obtenidos para "${tienda}":`, results.length, "productos");
        res.status(200).json(results);
    });
});


module.exports = router;
