const { Masters } = require("../models/models");
const ApiError = require("../error/apiError");

class MastersController {
  async authCheck(req, res) {}

  async create(req, res) {
    try {
      const { name, surname, rating } = req.body;
      const master = await Masters.create({ name, surname, rating });
      return res.json(master);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const masters = await Masters.findAll();
    return res.json(masters);
  }
}

module.exports = new MastersController();
