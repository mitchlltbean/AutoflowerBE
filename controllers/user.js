const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/user", (req, res) => {
  db.user
    .findOne({
      where: { phone: req.query.phone },
      include: [db.order]
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
  });


  
module.exports = router;
