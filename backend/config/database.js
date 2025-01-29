const mysql = require("mysql2");
require("dotenv").config();

console.log("Intentando conectar con la base de datos...");

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "xyro_db",
    port: process.env.DB_PORT || 3306
});

connection.connect((err) => {
    if (err) {
        console.error("❌ Error al conectar a MySQL:", err.message);
        return;
    }
    console.log("✅ Conexión exitosa a MySQL 🚀");
});

module.exports = connection;
