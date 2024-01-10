const router = require("express").Router();
const productManagement = require("./jobs");


router.use("/job", productManagement);

module.exports = router;