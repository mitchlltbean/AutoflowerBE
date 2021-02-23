const express = require("express");
const router = express.Router();
const db = require("../models");
// const bcrypt = require("bcrypt");

//TODO: create a login for admin to login from / route to admin page
// NEED TO EXPAND WITH MANGER OR JUST EMPLOYEE WITH BOOLEAN
router.get("/login", (req, res) => {
  db.employee
    .findOne({
      where: { login: req.body.login },
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

module.exports = router;
