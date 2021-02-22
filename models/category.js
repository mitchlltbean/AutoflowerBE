module.exports = function (sequelize, DataTypes) {
  var category = sequelize.define("category", {
    group: {
      type: DataTypes.STRING,
      allnull: false,
    },
  });

  // return Test;
  return category;
};
