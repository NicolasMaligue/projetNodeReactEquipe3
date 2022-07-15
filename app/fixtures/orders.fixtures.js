const { faker } = require("@faker-js/faker/locale/fr");
const { random_number } = require("../utils/");
const ENUM = require("../config/enum.config.js");

const orders = [];
for (let index = 0; index < 20; index++) {
  // Order fixture
  orders.push({
    model: "orders",
    data: {
      quoteId: random_number(1, 40), // todo : link only accepted orders
      priority: faker.helpers.arrayElement(Object.values(ENUM.order.priority)),
    },
  });
}

module.exports = orders;
