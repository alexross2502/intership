const sequelize = require("../db");
const { Towns } = require("./Towns");
const { Masters } = require("./Masters");

Towns.hasMany(Masters, {
  sourceKey: "name",
  foreignKey: "townName",
  constraints: false,
});

Masters.hasOne(Towns, {
  constraints: false,
});

//module.exports = { Interlayer };
