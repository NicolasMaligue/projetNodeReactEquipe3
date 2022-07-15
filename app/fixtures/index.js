const sequelize_fixtures = require("sequelize-fixtures");
module.exports = (db) => {
  const models = require("../models");

  // Import users fixtures into db
  sequelize_fixtures
    .loadFile("./app/fixtures/users.fixtures.js", db)
    .then(() => {
      console.log("Db: Users fixtures loaded");
      // Import customers fixtures into db
      sequelize_fixtures.loadFile("./app/fixtures/customers.fixtures.js", db);
    })
    .then(() => {
      console.log("Db: customers fixtures loaded");
      // Import customers fixtures into db
      sequelize_fixtures.loadFile("./app/fixtures/vehicles.fixtures.js", db);
    })
    .then(() => console.log("Db: vehicles fixtures loaded"));
};
