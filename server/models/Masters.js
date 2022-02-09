const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Masters = sequelize.define("master", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  surname: { type: DataTypes.STRING, allowNull: false },
  rating: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 },
    allowNull: false,
  },
});

module.exports = { Masters };
