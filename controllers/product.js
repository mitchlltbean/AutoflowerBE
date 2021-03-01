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

router.get("/product", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.product
      .findOne({
        where: { id: req.query.id },
        include: [db.category, db.order],
      })
      .then((productData) => {
        console.log(productData, "!!!!!!!!!");
        if (!productData) {
          res.status(404).send("no such user");
        } else {
          res.json(productData);
        }
      });
  }
});

router.get("/productsbycategory", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.category
      .findOne({
        where: { id: req.query.id },
        include: [db.product],
      })
      .then((productData) => {
        console.log(productData, "!!!!!!!!!");
        if (!productData) {
          res.status(404).send("no such user");
        } else {
          res.json(productData);
        }
      });
  }
});

router.get("/products", (req, res) => {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.product
      .findAll()
      .then((products) => {
        console.log(products, "products");
        res.json(products);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

router.post("/product", function (req, res) {
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    db.product
      .create({
        item: req.body.item,
        img: req.body.img,
        description: req.body.description,
        categoryId: req.body.categoryId,
        instock: req.body.instock,
        price: req.body.price,
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
