const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/order", (req, res) => {
  console.log(req.query, "!!!!!!!!!!!!!!")
  db.order
    .findOne({
      where: { id: req.query.id },
      include: [db.employee, db.user, {model:db.product, include:db.category}]

    })
    .then((orderData) => {
      console.log(orderData, "!!!!!!!!!");
      if (!orderData) {
        res.status(404).send("no such user");
      } else {
        res.json(orderData);
      }
    }).catch((err) => {
      res.status(500).json(err);
    });
});









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
