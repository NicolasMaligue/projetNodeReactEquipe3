const ENUM = require("../config/enum.config.js");

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      /**
       * Primary key 'id' auto added
       */
      priority: {
        type: Sequelize.ENUM(Object.values(ENUM.order.priority)),
        allowNull: false,
      },
      /**
       * field 'createdAt' auto added
       */
      /**
       * field 'updatedAt' auto added
       */
    });

    const Quote = require("./quote.model.js")(sequelize, Sequelize);
    Order.belongsTo(Quote, { as: "quote" }); 
  
    return Order;
  };
  