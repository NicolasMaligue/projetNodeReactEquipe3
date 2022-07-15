module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    /**
     * Primary key 'id' auto added
     */
    firstname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
    },
    zip: {
      type: Sequelize.STRING,
      validate: {
        len: [5, 5],
      },
    },
    city: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
      // validate: {
      //   is: "/^+33[1-9][0-9]{8}$/i",
      // },
    },
    mobile: {
      type: Sequelize.STRING,
      // validate: {
      //   is: "/^+33[6-7][0-9]{8}$/i",
      // },
    },
    /**
     * field 'createdAt' auto added
     */
    /**
     * field 'updatedAt' auto added
     */
  });

  const User = require("./user.model.js")(sequelize, Sequelize);
  /**
   * field creatorId auto added to the customer table
   * as foreign key for User.id
   */
  Customer.belongsTo(User, { as: "creator" }); //

  return Customer;
}
