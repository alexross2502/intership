const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Clients = sequelize.define("clients", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true },
});

module.exports = { Clients };
