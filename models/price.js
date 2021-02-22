module.exports = function (sequelize, DataTypes) {
  var price = sequelize.define("price", {
    cost: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
  });

  // return Test;
  return price;
};
