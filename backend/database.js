const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' }); // ✅ Asegura que carga correctamente el archivo .env

// 📌 Verifica que las variables de entorno se están cargando correctamente
console.log("🔍 Verificando variables de entorno en database.js...");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "*****" : "No definida"); 
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

// 🔹 Configuración de la conexión
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

// Conectar a la base de datos
db.connect(err => {
  if (err) {
    console.error("❌ Error al conectar a MySQL:", err.message);
    return;
  }
  console.log("✅ Conectado a la base de datos MySQL 🚀");
});

module.exports = db;
