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
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is invalid").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
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
    check("email", "Email is invalid").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  // Controller
  loginUsuario
);

router.get("/renew", validarJWT, revalidarToken);

module.exports = router;
