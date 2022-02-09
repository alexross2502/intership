const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { Masters } = require("./Masters");

const Towns = sequelize.define("towns", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

Towns.hasMany(Masters, {
  as: "TownName",
  foreignKey: "townName",
});

module.exports = { Towns };
