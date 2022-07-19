module.exports = (app) => {
    const logins = require("../controllers/login.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", logins.create);
  
    // Retrieve all Tutorials
    router.get("/", logins.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", logins.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", logins.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", logins.delete);
  
    // Delete all Tutorials
    router.delete("/", logins.deleteAll);
  
    app.use("/api/logins", router);
  };
  