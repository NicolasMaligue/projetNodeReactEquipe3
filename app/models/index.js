const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// DB init by ORM Sequelize
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

// DB tables defintions
db.users = require("./user.model.js")(sequelize, Sequelize);
db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.quotes = require("./quote.model.js")(sequelize, Sequelize);
db.orders = require("./order.model.js")(sequelize, Sequelize);
db.invoices = require("./invoice.model.js")(sequelize, Sequelize);
db.vehicles = require("./vehicle.model.js")(sequelize, Sequelize);

module.exports = db;
