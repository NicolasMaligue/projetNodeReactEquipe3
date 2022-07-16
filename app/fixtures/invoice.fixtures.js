const { random_number } = require("../utils/");

const invoices = [];
for (let index = 0; index < 10; index++) {
  // Invoice fixture
  invoices.push({
    model: "invoice",
    data: {
      orderId: random_number(1, 20),
    },
  });
}

module.exports = invoices;
