const router = require("express").Router();
const axios = require("axios");
var convert = require("xml-js");
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

router.post("/tax", (req, res) => {
  console.log(req.body, "@@@@@@@");
  const employeeData = authenticateMe(req);
  if (!employeeData) {
    res.status(403).send("login please");
  } else {
    axios
      .post(
        "http://webgis.dor.wa.gov/webapi/AddressRates.aspx?output=xml&addr=6500Lindersonway&city=&zip=98501"
      )
      .then(function (response) {
        xml = response;
        console.log(response, "!!!!!!!!!!");
        data = convert.xml2js(xml.data, { compact: true, spaces: 4 });
        res.json(data);
      })
      .catch((err) => {
        console.log(err, "!!!!!!!!");
        res.status(500).json(err);
      });
  }
});

module.exports = router;
