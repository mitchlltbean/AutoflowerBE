item: {
      type: DataTypes.STRING,
      allnull: false,
    },
    img: {
      type: DataTypes.STRING,
      allnull: true,
    },
    description: {
      type: DataTypes.STRING,
      allnull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allnull: false,
    },
    instock: {
      type: DataTypes.BOOLEAN,
      allnull: false,
    },
  });
  