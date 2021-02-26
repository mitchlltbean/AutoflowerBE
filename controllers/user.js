const express = require("express");
const router = express.Router();
const db = require("../models");



router.post("/user", function (req, res) {
    db.user
      .create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });


  
module.exports = router;
