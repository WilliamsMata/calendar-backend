/* 
  Rutas de Eventos
  host + /api/routes
*/
const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");

const { validarJWT } = require("../middlewares/validar-jwt");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require("../controllers/events");
const { isDate } = require("../helpers/isDate");

// Todas las peticiones tienen que pasar por la validación del JWT
router.use(validarJWT);

// Obtener eventos
router.get("/", obtenerEventos);

// Crear un nuevo evento
router.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").custom(isDate),
    check("bgColor", "Event color is required").not().isEmpty(),
    validarCampos,
  ],
  crearEvento
);

// Actualizar evento
router.put(
  "/:id",
  [
    check("title", "Title is required").not().isEmpty(),
    check("start", "Start date is required").custom(isDate),
    check("end", "End date is required").custom(isDate),
    check("bgColor", "Event color is required").not().isEmpty(),
    validarCampos,
  ],
  actualizarEvento
);

// Eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
