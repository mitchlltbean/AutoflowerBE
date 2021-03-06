module.exports = function (sequelize, DataTypes) {
  var order = sequelize.define("order", {
    total: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    tax: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    stateTax: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allnull: false,
    },
    
  });
  // everything gets linked to here
  order.associate=(models)=>{
   
    order.belongsToMany(models.product, {through: "order_product"})
    order.belongsTo(models.employee)
    order.belongsTo(models.user)
  }
  // return Test;
  return order;
};
