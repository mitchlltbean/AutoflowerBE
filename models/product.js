module.exports = function (sequelize, DataTypes) {
  var product = sequelize.define("product", {
    item: {
      type: DataTypes.STRING,
      allnull: false,
    },
    img: {
      type: DataTypes.STRING,
      allnull: true,
    },
    description: {
      type: DataTypes.STRING,
      allnull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    instock: {
      type: DataTypes.BOOLEAN,
      allnull: false,
    },
  });
  //Category id will be link to this model
  //price will linked to this model
  // return Test;
  return product;
};
