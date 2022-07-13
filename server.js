// Get environement variables
// process.env.<ENV_VAR> available into whole server.js project
const dotenv = require("dotenv");
dotenv.config();

// Framework Express
const express = require("express");
// API body-parser
const bodyParser = require("body-parser");
// CORS
const cors = require("cors");
// App devient la fonctionnalité express
const app = express();

const corsOptions = {
  origin: "*", //http://localhost:8080/
};
app.use(cors(corsOptions));

// Add Node ORM Sequelize
const db = require("./app/models");
//db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Autorisation avec le middleware
 *
 * Configuration des headers pour donner les accés aux différentes actions HTTP
 * GET POST PUT DELETE ....
 */
app.all("", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// require customer routes controller
require("./app/routes/customer.routes.js")(app);

// require product routes controller
require("./app/routes/user.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
