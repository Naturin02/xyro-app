require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Permite conexiones desde el móvil

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({ message: "Servidor funcionando en Express 🚀" });
});

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
