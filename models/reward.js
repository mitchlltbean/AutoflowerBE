module.exports = function (sequelize, DataTypes) {
  var reward = sequelize.define("reward", {
    points: {
      type: DataTypes.INTEGER,
      allnull: true,
    },
  });
  // linked user info
  //
  // return Test;
  return reward;
};
