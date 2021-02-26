const express = require("express");
const router = express.Router();
const db = require("../models");
// const bcrypt = require("bcrypt");

//TODO: create a login for admin to login from / route to admin page
// NEED TO EXPAND WITH MANGER OR JUST EMPLOYEE WITH BOOLEAN
router.get("/employee", (req, res) => {
  db.employee
    .findOne({
      where: { login: req.query.login },
      include:[db.order]
    })
    .then((employeeData) => {
      console.log(employeeData, "!!!!!!!!!");
      if (!employeeData) {
        res.status(404).send("no such user");
      } else {
        res.json(employeeData);
      }
    });
});

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

module.exports = router;
