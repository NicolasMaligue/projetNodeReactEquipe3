// const { random_number } = require("../utils/");
// const team_digi = require("./team_digi.js");
const { faker } = require("@faker-js/faker/locale/fr");
const student_digi = require("./student_digi.js");
const db = require("../models/Db.class.js");

// Find available creators (all users with role dealer)
module.exports = db.models.user
  .findAllCreator()
  .then((data) => login_fixtures(data))
  .catch((err) => {
    console.log(`catch err`, err);
  });

const login_fixtures = (creators_data) =>
  Object.values(student_digi).map((namic) => {
    const creator_ids = creators_data.map((user) => user.id);

    return {
      model: "login",
      data: {
        identifier: namic.name,
        password: faker.name.password(),
        creatorId: faker.helpers.arrayElement(creator_ids),
      },
    };
  });
