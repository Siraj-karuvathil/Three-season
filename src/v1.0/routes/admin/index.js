const router = require("express").Router();
const userManagement = require("./user");

router.use("/user", userManagement);

module.exports = router;