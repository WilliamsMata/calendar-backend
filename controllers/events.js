const { request, response } = require("express");
const Evento = require("../models/Evento");

const obtenerEventos = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "obtener eventos",
  });
};

const crearEvento = async (req = request, res = response) => {
  const evento = new Evento(req.body);

  try {
    evento.user = req.uid;

    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const actualizarEvento = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "Actualizar evento",
  });
};

const eliminarEvento = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "Eliminar evento",
  });
};

module.exports = {
  obtenerEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
};
