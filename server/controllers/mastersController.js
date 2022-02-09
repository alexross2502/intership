const { Masters } = require("../models/models");
const ApiError = require("../error/ApiError");

class MastersController {
  async create(req, res, next) {
    try {
      const { name, surname, rating, townName } = req.body;
      const master = await Masters.create({ name, surname, rating, townName });
      return res.json(master);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const masters = await Masters.findAll();
    return res.json(masters);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const master = await Masters.destroy({ where: { id: id } });
    return res.json(master);
  }
}

module.exports = new MastersController();
