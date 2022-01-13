const Router = require("express");
const router = new Router();
const mastersController = require("../controllers/mastersController");

router.get("/auth", mastersController.authCheck);
router.post("/", mastersController.create);
router.get("/", mastersController.getAll);

module.exports = router;
