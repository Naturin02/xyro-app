const express = require("express");
const cors = require("cors");
require("dotenv").config();
const routes = require("./index"); // Importamos las rutas

const app = express();

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({ message: "Servidor funcionando en Express 🚀" });
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
