module.exports = function (sequelize, DataTypes) {
  var employee = sequelize.define("employee", {
    manager: {
      type: DataTypes.BOOLEAN,
    },
    name: {
      type: DataTypes.STRING,
    },

    login: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  });

  // return Test;
  employee.associate=(models)=>{
    employee.hasMany(models.order)
   
  }


  return employee;
};
