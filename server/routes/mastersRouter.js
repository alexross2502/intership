const Router = require("express");
const router = new Router();
const mastersController = require("../controllers/mastersController");

router.post("/", mastersController.create);
router.get("/", mastersController.getAll);
router.delete("/:id", mastersController.destroy);

module.exports = router;
