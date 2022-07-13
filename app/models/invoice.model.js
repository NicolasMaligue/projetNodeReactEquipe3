module.exports = (sequelize, Sequelize) => {
  const Invoice = sequelize.define('invoice', {});

  const Order = require('./order.model.js')(sequelize, Sequelize);
  /**
   * foreign key order auto added to the invoice table by sequelize
   */
  Order.belongsTo(Order, {as: 'order'});

  return Invoice;
};
