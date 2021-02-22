module.exports = function (sequelize, DataTypes) {
  var sale = sequelize.define("sale", {
    ticket: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allnull: false,
    },
  });
  // linked user info
  //
  // return Test;
  return sale;
};
