const express = require("express");
const cors = require("cors");
const usuariosRoutes = require("./routes/usuarios1"); // Verifica que el nombre coincida exactamente con el archivo
const tiendasRoutes = require("./routes/tienda"); // Verifica que el nombre coincida exactamente con el archivo
const app = express();
app.use(express.json());
app.use(cors());

// ✅ Asegúrate de registrar correctamente la ruta
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/tiendas", tiendasRoutes);

app.get("/", (req, res) => {
    res.json({ message: "🚀 Servidor funcionando en Express" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
