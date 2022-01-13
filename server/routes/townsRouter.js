const Router = require("express");
const router = new Router();
const townsController = require("../controllers/townsController");

router.get("/auth", townsController.authCheck);
router.get("/", townsController.getAll);
router.post("/", townsController.create);

module.exports = router;
