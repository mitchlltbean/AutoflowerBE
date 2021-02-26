const router = require("express").Router();
const axios = require("axios");
var convert = require('xml-js');


router.post("/tax", (req, res) => {
    console.log(req.body, "@@@@@@@");
    axios
      .post("http://webgis.dor.wa.gov/webapi/AddressRates.aspx?output=xml&addr=6500Lindersonway&city=&zip=98501")
      .then(function (response) {
        xml= response
          console.log(response, "!!!!!!!!!!");
        data = convert.xml2js(xml.data, {compact: true, spaces: 4});
        res.json(data);
      })
      .catch((err) => {
        console.log(err, "!!!!!!!!");
        res.status(500).json(err);
      });
  });
  







module.exports = router;