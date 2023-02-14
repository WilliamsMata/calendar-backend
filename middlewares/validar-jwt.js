const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req = request, res = response, next) => {
  // x-token headers
  const token = req.header("x-token");

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }

  try {
    // payload del jwt
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED);

    // mandamos por la request los datos
    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: "Token no valido",
    });
  }

  next();
};

module.exports = {
  validarJWT,
};
