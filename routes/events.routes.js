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
  // route
  "/",
  [
    // middlewares
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha final es obligatoria").custom(isDate),
    check("bgColor", "El color del evento es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  // controller
  crearEvento
);

// Actualizar evento
router.put("/:id", actualizarEvento);

// Eliminar evento
router.delete("/:id", eliminarEvento);

module.exports = router;
