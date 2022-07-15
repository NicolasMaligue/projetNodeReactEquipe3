const { faker } = require("@faker-js/faker/locale/fr");
const student_digi = require("./student_digi.js");
// const team_digi = require("./team_digi.js");

// User fixture
module.exports = Object.values(student_digi).map((namic) => {
  return {
    model: "customers",
    data: {
      firstname: namic.name,
      lastname: faker.name.lastName(),
      address: faker.address.streetAddress(),
      zip: faker.address.zipCode(),
      city: faker.address.city(),
      phone: faker.phone.number("+334########"),
      mobile: faker.phone.number("+336########"),
      //      creatorId: Object.keys(team_digi).indexOf("jenny") + 1, // creator jenny
      creatorId: faker.random.numeric({
        min: 3,
        max: 8,
      }), // random dealer
    },
  };
});
