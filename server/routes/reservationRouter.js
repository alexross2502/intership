const Router = require("express");
const router = new Router();
const reservationController = require("../controllers/reservationController");

router.get("/", reservationController.getAll);
//router.post("/", reservationController.create);
router.delete("/:id", reservationController.destroy);

module.exports = router;
