const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/product", (req, res) => {
  db.product
    .findOne({
      where: { id: req.query.id },
      include:[db.category, db.order]
    })
    .then((productData) => {
      console.log(productData, "!!!!!!!!!");
      if (!productData) {
        res.status(404).send("no such user");
      } else {
        res.json(productData);
      }
    });
});






router.post("/product", function (req, res) {
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
  });


  
module.exports = router;
