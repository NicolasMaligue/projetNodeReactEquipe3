const { random_number } = require("../utils/");

const invoices = [];
for (let index = 0; index < 10; index++) {
  // Invoice fixture
  invoices.push({
    model: "invoices",
    data: {
      orderId: random_number(1, 19),
    },
  });
}

module.exports = invoices;
