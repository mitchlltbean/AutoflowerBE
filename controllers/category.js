const express = require("express");
const router = express.Router();
const db = require("../models");








router.post("/category", function (req, res) {
    db.category
      .create({
        group: req.body.group,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });


  
module.exports = router;
