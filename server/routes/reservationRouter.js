const Router = require("express");
const router = new Router();
const reservationController = require("../controllers/reservationController");

router.get("/auth", reservationController.authCheck);

module.exports = router;
