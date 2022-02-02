const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Towns = sequelize.define("towns", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
});

module.exports = { Towns };
