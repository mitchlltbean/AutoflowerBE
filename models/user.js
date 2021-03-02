module.exports = function (sequelize, DataTypes) {
  var user = sequelize.define("user", {
    name: {
      type: DataTypes.STRING,
      allnull: false,
    },
    phone: {
      type: DataTypes.STRING,
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
  user.associate=(models)=>{
    user.hasMany(models.order)

  }
  return user;
};
