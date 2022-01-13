const { Clients } = require("../models/models");
const ApiError = require("../error/apiError");

class ClientsController {
  async authCheck(req, res) {}

  async create(req, res) {
    try {
      const { name, email } = req.body;
      const client = await Clients.create({ name, email });
      return res.json(client);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const clients = await Clients.findAll();
    return res.json(clients);
  }
}

module.exports = new ClientsController();
