module.exports = (sequelize, DataTypes) => {
    const EmployeeData = sequelize.define("employee", {
      username: {
        type: DataTypes.STRING,
      },
      address: {
        type: DataTypes.STRING,
      }
    });
  
    return EmployeeData;
  };
  