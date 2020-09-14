
const express = require("express");
const router = express.Router();
const { addNumber, subNumber, mulNumber, divNumber } = require("../operation");


router.post("/addition", addNumber);
router.post("/subtraction", subNumber);
router.post("/multiplication", mulNumber);
router.post("/division", divNumber);

module.exports = router;
