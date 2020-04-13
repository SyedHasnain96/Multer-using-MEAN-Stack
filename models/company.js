'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagePath: DataTypes.STRING
  }, {});
  Company.associate = function (models) {


  };
  return Company;
};