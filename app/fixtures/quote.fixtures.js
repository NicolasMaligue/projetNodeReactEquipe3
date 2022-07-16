const { faker } = require("@faker-js/faker/locale/fr");
const { random_number } = require("../utils/");
const ENUM = require("../config/enum.config.js");

const quotes = [];
for (let index = 0; index < 40; index++) {
  // Quote fixture
  quotes.push({
    model: "quote",
    data: {
      creatorId: random_number(3, 7),
      customerId: random_number(1, 12),
      vehicleId: random_number(1, 50),
      status: faker.helpers.arrayElement(Object.values(ENUM.quote.status)),
    },
  });
}

module.exports = quotes;
