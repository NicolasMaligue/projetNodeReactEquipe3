const { faker } = require("@faker-js/faker/locale/fr");
const { random_number } = require("../utils/");
const ENUM = require("../config/enum.config.js");

const quotes = [];
for (let index = 0; index < 20; index++) {
  // Quote fixture
  quotes.push({
    model: "quotes",
    data: {
      quoteId: random_number(3, 7),
      priority: faker.helpers.arrayElement(Object.values(ENUM.quote.status)),
    },
  });
}

module.exports = quotes;
