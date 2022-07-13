const ENUM = require("../config/enum.config.js");

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
      // To access enum values out there :  db.users.rawAttributes.role.values
      type: Sequelize.ENUM(ENUM.user.role),
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
