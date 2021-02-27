const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/signup", (req, res) => {
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

// router.post("/category", function (req, res) {
//   db.category
//     .create({
//       group: req.body.group,
//     })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// router.post("/product", function (req, res) {
//   db.product
//     .create({
//       item: req.body.item,
//       img: req.body.img,
//       description: req.body.description,
//       categoryId: req.body.categoryId,
//       instock: req.body.instock,
//       price: req.body.price,

//     })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// router.post("/order", function (req, res) {
//   db.order
//     .create({
//       total: req.body.total,
//       subtotal: req.body.subtotal,
//       tax: req.body.tax,
//       stateTax: req.body.stateTax,
//       status:req.body.status
//     })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// router.post("/transaction", function (req, res) {
//   db.transaction
//     .create({
//       ticket: req.body.ticket,
//       status: req.body.status,
//     })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// router.post("/user", function (req, res) {
//   db.user
//     .create({
//       name: req.body.name,
//       phone: req.body.phone,
//       email: req.body.email,
//     })
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

module.exports = router;
