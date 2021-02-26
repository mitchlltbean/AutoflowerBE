const express = require("express");
const router = express.Router();
const db = require("../models");











router.post("/order", function (req, res) {
    db.order
      .create({
        total: req.body.total,
        subtotal: req.body.subtotal,
        tax: req.body.tax,
        stateTax: req.body.stateTax,
        status:req.body.status
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });


  
module.exports = router;
