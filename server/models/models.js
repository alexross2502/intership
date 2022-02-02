const { Admin } = require("./Admin");
const { Towns } = require("./Towns");
const { Masters } = require("./Masters");
const { Clients } = require("./Clients");

Masters.hasOne(Towns);
Towns.belongsTo(Masters);

module.exports = {
  Admin,
  Towns,
  Masters,
  Clients,
};
