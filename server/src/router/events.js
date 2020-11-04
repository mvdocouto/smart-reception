const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/", (req, res) => {
  const listEvents = db.events.list();
  res.status(200).json(listEvents);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const showEvent = db.events.get(id);
  res.status(200).json(showEvent);
});

router.post("/", (req, res) => {
  console.log("req.body", req.body);
  const {
    evento,
    date,
    inicio,
    termino,
    tipo,
    ministro,
    musicas,
    pregador,
    houveApelo,
    totalConversoes,
    totalPresentes,
    totalVisitantes,
    totalWeb,
    totalCarros,
    totalMotos,
    observacoes,
    colaboradores,
  } = req.body;

  const eventID = db.events.create({
    evento: evento,
    date: date,
    inicio: inicio,
    termino: termino,
    tipo: tipo,
    ministro: ministro,
    musicas: musicas,
    pregador: pregador,
    houveApelo: houveApelo,
    totalConversoes: totalConversoes,
    totalPresentes: totalPresentes,
    totalVisitantes: totalVisitantes,
    totalWeb: totalWeb,
    totalCarros: totalCarros,
    totalMotos: totalMotos,
    observacoes: observacoes,
  });

  for (colaborador of colaboradores) {
    db.collaborators.create({
      nome: colaborador.nome,
      local: colaborador.local,
      eventID: eventID,
    });
  }

  const event = db.events.get(eventID);
  res.status(201).json(event);
});

module.exports = router;
