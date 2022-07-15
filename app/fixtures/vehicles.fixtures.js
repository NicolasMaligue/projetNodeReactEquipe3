const { faker } = require("@faker-js/faker/locale/fr");

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
      quantity: faker.random.numeric(1, {
        min: 0,
        max: 6,
      }),
    },
  });
}

module.exports = vehicles;
