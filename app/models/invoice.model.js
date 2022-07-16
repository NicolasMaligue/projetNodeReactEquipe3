module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define("invoice", {}); // Primary key 'id' and field 'createdAt' and 'updateddAt' auto added

  const Order = require("./order.model.js")(sequelize, Sequelize);
  /**
   * foreign key order auto added to the invoice table
   */
  Invoice.belongsTo(Order, { foreignKey: { allowNull: false } });

  return Invoice;
}