const { Reservation } = require("../models/models");
const ApiError = require("../error/ApiError");

class ReservationController {
  async getAll(req, res) {
    const reservation = await Reservation.findAll();
    return res.json(reservation);
  }

  async destroy(req, res) {
    const { id } = req.params;
    const reservation = await Reservation.destroy({ where: { id: id } });
    return res.json(reservation);
  }
}

async function create(day, start, end, master_id) {
  try {
    const { day, start, end, master_id } = req.body;
    const reservation = await Reservation.create({
      day,
      start,
      end,
      master_id,
    });
    return res.json(reservation);
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
}

//create("das", 13, 14);

module.exports = new ReservationController();
