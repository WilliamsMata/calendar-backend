/* 
  Rutas de Eventos
  host + /api/routes
*/
const { Router } = require("express");
const router = Router();

const { validarJWT } = require("../middlewares/validar-jwt");
const {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");

// Todas las peticiones tienen que pasar por la validación del JWT
router.use(validarJWT);

// Obtener eventos
router.get("/", obtenerEventos);

// Crear un nuevo evento
router.post("/", crearEvento);

// Actualizar evento
router.put("/:id", actualizarEvento);

// Eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
