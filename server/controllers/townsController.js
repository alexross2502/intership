const { Towns } = require("../models/models");
const ApiError = require("../error/apiError");

class TownsController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const town = await Towns.create({ name });
      return res.json(town);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const towns = await Towns.findAll();
    return res.json(towns);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const towns = await Towns.destroy({ where: { id: id } });
    return res.json(towns);
  }
}

module.exports = new TownsController();
