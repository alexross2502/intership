const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Masters = sequelize.define("master", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  rating: { type: DataTypes.INTEGER, validate: { min: 1, max: 5 } },
});

module.exports = { Masters };
