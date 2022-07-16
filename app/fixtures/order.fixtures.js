const { faker } = require("@faker-js/faker/locale/fr");
const { random_number } = require("../utils/");
const ENUM = require("../config/enum.config.js");

const orders = [];

// a quote for one order
const id_max = 20;
let quote_ids_available = [];
for (let index = 1; index <= id_max; index++) {
  quote_ids_available.push(index);
}

for (let index = 0; index < id_max; index++) {
  const id = faker.helpers.arrayElement(quote_ids_available);
  quote_ids_available = quote_ids_available.filter((element) => element !== id);

  // Order fixture
  orders.push({
    model: "order",
    data: {
      quoteId: id,
      priority: faker.helpers.arrayElement(Object.values(ENUM.order.priority)),
    },
  });
}

module.exports = orders;
