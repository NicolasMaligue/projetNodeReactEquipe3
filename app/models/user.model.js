module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    /**
     * Primary key 'id' auto added by sequelize
     */
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.ENUM("hacker", "dealer", "Godfather"),
      allowNull: false,
    },
    /**
     * field 'createdAt' auto added by sequelize
     */
    /**
     * field 'updatedAt' auto added by sequelize
     */
  });

  return User;
};
