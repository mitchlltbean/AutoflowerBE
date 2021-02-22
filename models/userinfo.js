module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allnull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    email: {
      type: DataTypes.STRING,
      allnull: false,
    },
  });
  //
  //
  // return Test;
  return user;
};
