const router = require("express").Router();
const CompatibilityController = require("../controllers/CompatibilityController");

router.post("/compatibility", CompatibilityController.inputData);

module.exports = router;
