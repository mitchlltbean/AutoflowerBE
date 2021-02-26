const express = require("express");
const router = express.Router();
const db = require("../models");








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
