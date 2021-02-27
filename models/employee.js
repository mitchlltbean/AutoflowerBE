const bcrypt = require("bcrypt");


module.exports = function (sequelize, DataTypes) {
  var employee = sequelize.define("employee", {
    manager: {
      type: DataTypes.BOOLEAN,
    },

    name: {
      type: DataTypes.STRING,
    },

    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  // return Test;
  employee.associate=(models)=>{
    employee.hasMany(models.order)
   
  }

  employee.beforeCreate(function (employee) {
    employee.login = bcrypt.hashSync(employee.login, bcrypt.genSaltSync(10), null);
});
  return employee;
};
