require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Permite recibir JSON en las peticiones

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({ message: "API de Xyro funcionando correctamente 🚀" });
});

// Configuración del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
