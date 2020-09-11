
const express = require("express");
const router = express.Router();
const { addNumber, subNumber, mulNumber, divNumber } = require("../operation");
const { checkDataType } = require("../datatype");

router.post("/addition", checkDataType, addNumber);
router.post("/subtraction", checkDataType, subNumber);
router.post("/multiplication",checkDataType, mulNumber);
router.post("/division", checkDataType, divNumber);

module.exports = router;
