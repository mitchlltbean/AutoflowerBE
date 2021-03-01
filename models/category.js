module.exports = function (sequelize, DataTypes) {
  var category = sequelize.define("category", {
    group: {
      type: DataTypes.STRING,
      allnull: false,
    },
  });
//TODO: create associaiton with product
category.associate=(models)=>{
  category.hasMany(models.product)
}
  // return Test;
  return category;
};
