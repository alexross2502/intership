const Router = require("express");
const router = new Router();
const clientsController = require("../controllers/clientsController");

router.get("/auth", clientsController.authCheck);
router.get("/", clientsController.getAll);
router.post("/", clientsController.create);

module.exports = router;
