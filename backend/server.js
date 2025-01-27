const express = require("express");
const cors = require("cors");

require("dotenv").config();
const db = require("./database");
const userRoutes = require("routes/usuarios");

const app = express();
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
