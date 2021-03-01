const express = require("express");
const router = express.Router();
const db = require("../models");
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

router.get("/category", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.category
      .findOne({
        where: { group: req.body.group },
        include: [db.product],
      })
      .then((catData) => {
        console.log(catData, "!!!!!!!!!");

        res.json(catData);
      });
  }
});

router.post("/category", function (req, res) {
  const employeeData = authenticateMe(req);
  console.log(employeeData, "!!@@!@!@!@!!@");
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
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
  }
});

module.exports = router;
