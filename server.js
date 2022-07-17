// Get environement variables
// process.env.<ENV_VAR> available into whole server.js project
const dotenv = require("dotenv");
dotenv.config();

// db management by ORM Sequelize
const db = require("./app/models/Db.class.js");
// Call fixtures function to load db
const cmdArgs = process.argv.slice(2);
if (cmdArgs.indexOf("reload-db") != -1) {
  db.sequelize.sync({ force: true }).then(() => {
    console.log("ORM: Drop and re-sync db.");
    // Import fixtures (test data) into db
    if (cmdArgs.indexOf("with-fixtures") != -1) {
      require("./app/fixtures/");
    }
  });
} else {
  db.sequelize.sync().then(() => {
    console.log("ORM: Sync only missing fields.");
  });
}

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

// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Add response header for middleware autorisations
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
  res.json({ message: "Welcome to fun4free, a Node.JS/React application." });
});

// require all routes controller
db.models_name.map((model_name) => {
  require(`./app/routes/${model_name}.routes.js`)(app);
});

// set port, listen for requests
const API_PORT = process.env.API_PORT || 3001;
app.listen(API_PORT, () => {
  console.log(`Server is running on port ${API_PORT}.`);
});
