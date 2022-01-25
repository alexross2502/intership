const Router = require("express");
const router = new Router();
const adminController = require("../controllers/adminController");

router.get("/:login/:password", adminController.check);

module.exports = router;
