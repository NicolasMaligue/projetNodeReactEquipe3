const sequelize_fixtures = require("sequelize-fixtures");

module.exports = async (db) => {
  try {
    // Import users fixtures into db
    await sequelize_fixtures
      .loadFile("./app/fixtures/users.fixtures.js", db)
      .then(async () => {
        console.log("Db: Users fixtures loaded");
        // Import customers fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/customers.fixtures.js",
          db
        );
      })
      .then(async () => {
        console.log("Db: customers fixtures loaded");
        // Import customers fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/vehicles.fixtures.js",
          db
        );
      })
      .then(async () => {
        console.log("Db: vehicles fixtures loaded");
        // Import quotes fixtures into db
        await sequelize_fixtures.loadFile(
          "./app/fixtures/quotes.fixtures.js",
          db
        );
      })
      .then(() => console.log("Db: quotes fixtures loaded"));
  } catch (err) {
    console.log("Err: fucking fixtures error", err);
  }
};
