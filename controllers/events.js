const { request, response } = require("express");

const obtenerEventos = async (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "obtener eventos",
  });
};

const crearEvento = (req = request, res = response) => {
  res.json({
    ok: true,
    msg: "crear evento",
  });
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
