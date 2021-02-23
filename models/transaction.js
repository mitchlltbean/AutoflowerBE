module.exports = function (sequelize, DataTypes) {
  var transaction = sequelize.define("transaction", {
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
  return transaction;
};
