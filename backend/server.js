require('dotenv').config({ path: './.env' }); // ✅ Asegura que carga correctamente el archivo .env
const express = require('express');
const db = require('./database'); // ✅ Importa la conexión desde database.js

const app = express();
const PORT = 5000;

// 📌 Verifica que las variables de entorno se están cargando correctamente
console.log("🔍 Verificando variables de entorno en server.js...");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "*****" : "No definida"); 
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

// RUTA DE PRUEBA PARA VER SI LA CONEXIÓN FUNCIONA
app.get('/', (req, res) => {
    res.json({ message: "Servidor funcionando en Express 🚀" });
});

// INICIAR SERVIDOR
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
