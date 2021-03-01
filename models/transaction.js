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
  transaction.associate=(models)=>{
    transaction.belongsTo(models.order)
  }
  // return Test;
  return transaction;
};
