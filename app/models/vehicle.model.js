module.exports = (sequelize, Sequelize) => {
  const Vehicle = sequelize.define("vehicle", {
    /**
     * Primary key 'id' auto added by sequelize
     */
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.DECIMAL,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    /**
     * field 'createdAt' auto added by sequelize
     */
    /**
     * field 'updatedAt' auto added by sequelize
     */
  });

  return Vehicle;
};
