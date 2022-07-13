const ENUM = require("../config/enum.config.js");

module.exports = (sequelize, Sequelize) => {
    const Quote = sequelize.define("quote", {
      /**
       * Primary key 'id' auto added
       */
      status: {
        type: Sequelize.ENUM(ENUM.quote.status),
        allowNull: false,
      },
      /**
       * field 'createdAt' auto added
       */
      /**
       * field 'updatedAt' auto added
       */
    });
    
    const Customer = require("./customer.model.js")(sequelize, Sequelize);
    Quote.belongsTo(Customer, { as: "customer" }); 

    const Vehicle = require("./vehicle.model.js")(sequelize, Sequelize);
    Quote.belongsTo(Vehicle, { as: "vehicle" }); 

    const User = require("./user.model.js")(sequelize, Sequelize);
    Quote.belongsTo(User, { as: "creator" }); 
  
    return Quote;
  };
  