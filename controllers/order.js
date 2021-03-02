const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");
const name = process.env.name;

const authenticateMe = (req) => {
  let token = false;

  if (!req.headers) {
    token = false;
  } else if (!req.headers.authorization) {
    token = false;
  } else {
    token = req.headers.authorization.split(" ")[1];
  }
  let data = false;
  if (token) {
    data = jwt.verify(token, name, (err, data) => {
      if (err) {
        return false;
      } else {
        return data;
      }
    });
  }
  return data;
};

router.get("/order", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.order
      .findOne({
        where: { id: req.query.id },
        include: [
          db.employee,
          db.user,
          { model: db.product, include: db.category },
        ],
      })
      .then((orderData) => {
        console.log(orderData, "!!!!!!!!!");

        res.json(orderData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

router.post("/order", function (req, res) {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.order
      .create({
        total: req.body.total,
        subtotal: req.body.subtotal,
        tax: req.body.tax,
        stateTax: req.body.stateTax,
        status: req.body.status,
      })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
});

module.exports = router;
