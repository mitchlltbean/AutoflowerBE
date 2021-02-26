const express = require("express");
const router = express.Router();
const db = require("../models");



router.get("/category", (req, res) => {
  db.category
    .findOne({
      where: { id: req.query.id},
      include:[db.product]
    })
    .then((catData) => {
      console.log(catData, "!!!!!!!!!");
      if (!catData) {
        res.status(404).send("no such user");
      } else {
        res.json(catData);
      }
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


  
module.exports = router;
