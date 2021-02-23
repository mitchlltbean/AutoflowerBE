const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/create", (req, res) => {
  db.employee
    .create({
      login: req.body.login,
      manager: req.body.manager,
      name: req.body.name,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

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

router.post("/product", function (req, res) {
  db.product
    .create({
      item: req.body.item,
      img: req.body.img,
      description: req.body.description,
      category: req.body.category,
      instock: req.body.instock,
      price: req.body.price,
      size: req.body.size,
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
