const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");
const uploadController = require("../controllers/upload");
const upload = require("../middleware/upload");
const db = require("../models");
const Employee = db.employees;

let routes = (app) => {
  router.get("/", homeController.getHome);

  router.post("/upload", upload.single("file"), uploadController.uploadFiles);

  router.get("/createEmployeeForm", homeController.saveEmployee);
  
  router.post("/saveEmployeeData", function (req, res) {
    try {

      if (req.body.username == undefined) {
        return res.send(`You must enter a employee name.`);
      }
      if (req.body.address == undefined) {
        return res.send(`You must enter a employee address.`);
      }

      Employee.create({
        username: req.body.username,
        address: req.body.address

      }).then((Employee) => {

        return res.send(`Employee Data has been uploaded.`);
      });
    } catch (error) {
      console.log(error);
      return res.send(`Error when trying upload employee data: ${error}`);
    }
  });

  return app.use("/", router);
};

module.exports = routes;
