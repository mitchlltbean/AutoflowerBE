const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
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

//TODO: create a login for admin to login from / route to admin page
// NEED TO EXPAND WITH MANGER OR JUST EMPLOYEE WITH BOOLEAN

router.post("/create", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.employee
      .create(req.body)
      .then((newEmployee) => {
        const token = jwt.sign(
          {
            manager: newEmployee.manager,
            name: newEmployee.name,
            login: newEmployee.login,
          },
          "mitchell",
          {
            expiresIn: "199h",
          }
        );
        return res.json({ employee: newEmployee, token });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.post("/login", (req, res) => {
  db.employee
    .findOne({
      where: { id: req.body.id },
      include: [db.order],
    })
    .then((employee) => {
      console.log(employee);
      if (!employee) {
        return res.status(404).send("no such user");
      } else if (bcrypt.compareSync(req.body.login, employee.login)) {
        const token = jwt.sign(
          {
            manager: employee.manager,
            name: employee.name,
            id: employee.id,
          },
          "mitchell",
          {
            expiresIn: "199h",
          }
        );
        return res.json({ employee, token });
      } else {
        return res.status(403).send("wrong password");
      }
    });
});

router.get("/employees", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.employee
      .findAll()
      .then((employees) => {
        console.log(employees, "EMPLOYEES");
        res.json(employees);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.delete("/deleteemployee/:id", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.employee
      .findOne({
        where: {
          id: req.params.id,
        },
      })
      .then((employee) => {
        if (employee.id === employee.id) {
          db.employee
            .destroy({
              where: {
                id: req.params.id,
              },
            })
            .then((delEmployee) => {
              res.json(delEmployee);
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
        } else {
          res.status(403).send("no good");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});
module.exports = router;
