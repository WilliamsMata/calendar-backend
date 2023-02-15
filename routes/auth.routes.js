/* 
  Rutas de Usuarios
  host + /api/auth
*/

const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

const {
  crearUsuario,
  loginUsuario,
  revalidarToken,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

router.post(
  // route
  "/new",
  [
    // Middleware
    check("name", "El nombre es requerido").not().isEmpty(),
    check("email", "El email es invalido").isEmail(),
    check(
      "password",
      "La contraseña debe tener por lo menos 6 caracteres"
    ).isLength({ min: 6 }),
    validarCampos,
  ],
  // Controller
  crearUsuario
);

router.post(
  // route
  "/",
  [
    // Middleware
    check("email", "El email es invalido").isEmail(),
    check(
      "password",
      "La contraseña debe tener por lo menos 6 caracteres"
    ).isLength({ min: 6 }),
    validarCampos,
  ],
  // Controller
  loginUsuario
);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
