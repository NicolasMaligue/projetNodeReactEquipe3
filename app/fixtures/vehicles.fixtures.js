const { faker } = require("@faker-js/faker/locale/fr");
const { random_number } = require("../utils/");

const vehicles = [];
for (let index = 0; index < 50; index++) {
  // Vehicle fixture
  vehicles.push({
    model: "vehicles",
    data: {
      model: faker.vehicle.model(),
      manufacturer: faker.vehicle.manufacturer(),
      type: faker.vehicle.type(),
      description: faker.lorem.sentence(),
      price: faker.finance.amount(6000, 30000, 1),
      quantity: random_number(0, 6), // simplier as faker random equivalent : faker.random.numeric(1, {bannedDigits: ["7", "8", "9"]})
    },
  });
}

module.exports = vehicles;
