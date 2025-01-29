require("dotenv").config(); // Cargar variables de entorno
const express = require("express");
const cors = require("cors");
const db = require("./config/database"); // Conexión a la base de datos


// Importar rutas
const usuariosRoutes = require("./routes/Usuarios"); // Ruta correcta para usuarios

const app = express();
app.use(express.json()); // Middleware para manejar JSON
app.use(cors()); // Permitir solicitudes desde el frontend

// ✅ Rutas
app.use("/api/usuarios", usuariosRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({ message: "Servidor funcionando en Express 🚀" });
});

// Inicializar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Servidor corriendo en http:// 192.168.137.1:${PORT}`);
});
