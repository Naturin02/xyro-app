const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const usuariosRoutes = require('./routes/usuarios'); // Importa las rutas

dotenv.config({ path: path.resolve(__dirname, '.env') });

const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json()); // Permite recibir JSON en las peticiones
app.use(cors()); // Habilita CORS para la app móvil

console.log("🔍 Verificando variables de entorno...");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "*****" : "No definida");
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ message: "Servidor funcionando en Express 🚀" });
});

// Rutas de usuarios
app.use('/usuarios', usuariosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
