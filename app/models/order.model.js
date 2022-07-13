const ENUM = require("../config/enum.config.js");

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      /**
       * Primary key 'id' auto added by sequelize
       */
      priority: {
        type: Sequelize.ENUM(ENUM.order.priority),
        allowNull: false,
      },
    });
  
    const Quote = require("./quote.model.js")(sequelize, Sequelize);
    Order.belongsTo(Quote, { as: "quote" }); 
  
    return Order;
  };
  