const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);
db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.quotes = require("./quote.model.js")(sequelize, Sequelize);
db.orders = require("./order.model.js")(sequelize, Sequelize);
db.invoices = require('./invoice.model.js')(sequelize, Sequelize);
db.vehicles = require("./vehicle.model.js")(sequelize, Sequelize);

/**
 * to access role ENUM values with User model
 */
// db.users.rawAttributes.role.values.reduce((acc, curr) => {
// //   acc[curr] = curr;
// //   return acc;
// });

console.log("User model created (db.users.attributes) ");

module.exports = db;
