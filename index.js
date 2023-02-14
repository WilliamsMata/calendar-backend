const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./database/config");
require("dotenv").config();

// Crear el servidor de express
const app = express();
const port = process.env.PORT;

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Directorio publico
app.use(express.static("public"));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use("/api/auth", require("./routes/auth.routes"));

// TODO: crud// Eventos

// Escuchar peticiones
app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
