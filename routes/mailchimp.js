const express = require("express");
var router = express.Router();

const mailchimpController = require('../controllers/mailchimpController');

router.post('/create', mailchimpController.create);

module.exports = router;