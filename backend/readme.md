ejecutar para que funcione:
1. cd backend
2. npm init -y

3. npm install express cors dotenv mysql2 bcryptjs jsonwebtoken nodemon
cuando ya este instalado en su laptop puede ejecutar:
npm start → Inicia el servidor de forma normal.
npm run dev → Inicia con nodemon (reinicia automáticamente cuando hay cambios).

modificar server.js dependiendo del puerto (localhost:3000)

para que funcione con movil:
npm install express cors dotenv (endpoints)



-------------------------------------------------------------------
🔹 Paso 1: Instalar las librerías necesarias
Ejecuta en la terminal dentro de la carpeta backend:

sh
Copiar
Editar
npm install express cors dotenv mysql2 jsonwebtoken bcryptjs
Explicación de las librerías:

express → Framework para construir la API.
cors → Permite que la app móvil acceda a la API.
dotenv → Manejo de variables de entorno.
mysql2 → Cliente para conectar Node.js con MySQL.
jsonwebtoken → Para autenticación con JWT.
bcryptjs → Para encriptar contraseñas.
🔹 Paso 2: Configurar la conexión a MySQL
📌 Crea un archivo de configuración db.js en backend/config/db.js:

js
Copiar
Editar
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "xyro_db",
});

db.connect(err => {
    if (err) {
        console.error("❌ Error al conectar a MySQL:", err);
        return;
    }
    console.log("✅ Conexión exitosa a MySQL");
});

module.exports = db;
📌 Crea un archivo .env en backend/.env con los datos de tu base de datos:

env
Copiar
Editar
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=xyro_db
PORT=5000
JWT_SECRET=secreto_super_seguro
Asegúrate de cambiar tu_contraseña por la correcta.

🔹 Paso 3: Crear index.js para iniciar el servidor
📌 Ubicación: backend/index.js

js
Copiar
Editar
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

// Configuración
app.use(express.json());
app.use(cors()); // Permitir acceso desde la app móvil

// Rutas básicas
app.get("/", (req, res) => {
    res.json({ message: "Servidor funcionando en Express 🚀" });
});

// Importar rutas de autenticación
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});
🔹 Paso 4: Crear las rutas de autenticación
📌 Ubicación: backend/routes/authRoutes.js

js
Copiar
Editar
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/db");

const router = express.Router();

// 🔹 Registro de usuario
router.post("/register", async (req, res) => {
    const { email, password } = req.body;

    // Verificar si el usuario ya existe
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.status(500).json({ error: "Error en la base de datos" });

        if (results.length > 0) return res.status(400).json({ error: "El usuario ya existe" });

        // Encriptar contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Guardar usuario en la base de datos
        db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword], (err, result) => {
            if (err) return res.status(500).json({ error: "Error al registrar usuario" });

            res.json({ message: "Usuario registrado correctamente ✅" });
        });
    });
});

// 🔑 Inicio de sesión
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Buscar usuario en la base de datos
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.status(500).json({ error: "Error en la base de datos" });

        if (results.length === 0) return res.status(400).json({ error: "Usuario no encontrado ❌" });

        const user = results[0];

        // Verificar contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Contraseña incorrecta ❌" });

        // Generar token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login exitoso ✅", token });
    });
});

module.exports = router;
🔹 Paso 5: Crear la tabla en MySQL
Ejecuta esta consulta en MySQL Workbench:

sql
Copiar
Editar
CREATE DATABASE IF NOT EXISTS xyro_db;
USE xyro_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
🔹 Paso 6: Ejecutar el backend
En la terminal, dentro de backend, ejecuta:

sh
Copiar
Editar
node index.js
Si todo está correcto, debería mostrar:

less
Copiar
Editar
✅ Servidor corriendo en http://localhost:5000
✅ Conexión exitosa a MySQL
📡 Cómo conectar la app móvil con la API
Modifica login.tsx en tu aplicación React Native:

js
Copiar
Editar
const loginUser = async () => {
    try {
        const response = await fetch("http://10.0.2.2:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            console.log("✅ Login exitoso", data);
            router.replace("/(tabs)/marcas");
        } else {
            console.error("❌ Error en login:", data.error);
        }
    } catch (error) {
        console.error("❌ Error al conectar con el backend:", error);
    }
};
Ahora, cuando el usuario inicie sesión, se conectará a tu backend en Express.js y MySQL.

🎯 Resumen
✅ Configuramos el backend con Express y MySQL
✅ Creamos las rutas de autenticación (registro y login)
✅ Configuramos la base de datos en MySQL Workbench
✅ Conectamos la aplicación móvil con la API REST

¡Listo! 🚀🔥 Ahora puedes probarlo en tu emulador Android.