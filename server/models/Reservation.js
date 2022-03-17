const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Reservation = sequelize.define("reservation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  day: { type: DataTypes.STRING, allowNull: false },
  start: { type: DataTypes.INTEGER, allowNull: false },
  end: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = { Reservation };
