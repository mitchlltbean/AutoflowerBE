module.exports = function (sequelize, DataTypes) {
  var employee = sequelize.define("employee", {
    Manager: {
      type: DataTypes.BOOLEAN,
    },

    Login: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  // return Test;
  return employee;
};
