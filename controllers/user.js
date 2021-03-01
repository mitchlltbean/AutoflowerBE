const express = require("express");
const router = express.Router();
const db = require("../models");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
    data = jwt.verify(token, "mitchell", (err, data) => {
      if (err) {
        return false;
      } else {
        return data;
      }
    });
  }
  return data;
};

router.get("/user", (req, res) => {
  db.user
    .findOne({
      where: { phone: req.query.phone },
      include: [db.order],
    })
    .then((userData) => {
      console.log(userData, "!!!!!!!!!");
      if (!userData) {
        res.status(404).send("no such user");
      } else {
        res.json(userData);
      }
    });
});

router.post("/user", function (req, res) {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
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
  }
});

module.exports = router;
