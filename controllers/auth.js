const { request, response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuario");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // encontrar usuario por email
    let usuario = await Usuario.findOne({ email });

    // si ya existe un email valido retorna un error
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "The mail is already in use",
      });
    }

    usuario = new Usuario(req.body);

    // encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();

    // Generar JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    });
  }
};

const loginUsuario = async (req = request, res = response) => {
  const { email, password } = req.body;

  try {
    // encontrar usuario por email
    const usuario = await Usuario.findOne({ email });

    // si no existe el usuario con el email
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: "The user with that email does not exist",
      });
    }

    // Confirmar contraseña
    const validPassword = bcrypt.compareSync(password, usuario.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Incorrect password",
      });
    }

    // Generar JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      ok: false,
      msg: "Please talk to the administrator",
    });
  }
};

const revalidarToken = async (req = request, res = response) => {
  const { uid, name } = req;

  // generar un jwt y retornarlo en esta petición
  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};
