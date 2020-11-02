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
  const data = req.body;
  const eventID = db.events.create({
      name: data.name,
      email: data.email,
  });

  const event = db.events.get(eventID);
  res.status(201).json(event);
});

module.exports = router;
