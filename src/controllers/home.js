const path = require("path");

const home = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};

const employeeData = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/employee.html`));
};

module.exports = {
  getHome: home,
  saveEmployee:employeeData
};
