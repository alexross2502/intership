const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Clients = sequelize.define("clients", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
});

module.exports = { Clients };
