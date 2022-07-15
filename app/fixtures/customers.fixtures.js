const { faker } = require("@faker-js/faker/locale/fr");
const student_digi = require("./student_digi.js");
const { random_number } = require("../utils/");
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
      /**
       * random creator (thus, user with role dealer namely user.id beetween 3 and 7)
       */
      creatorId: random_number(3, 7),
      // creatorId: faker.random.numeric(1, {bannedDigits: ["0", "1", "2", "8", "9"]}),   // faker random equivalentas above
      // creatorId: Object.keys(team_digi).indexOf("jenny") + 1,                          // specific creator, here : jenny
    },
  };
});
