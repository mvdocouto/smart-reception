const express = require("express");
const router = express.Router();

const db = require("../db");

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const colaborators = db.collaborators.list();
  
  res.status(200).json(
    colaborators.filter((colaborator) => {
      return colaborator.eventID === id;
    })
  );
});

module.exports = router;


