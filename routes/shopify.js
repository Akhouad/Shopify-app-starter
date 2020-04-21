const express = require("express");
var router = express.Router();

const shopifyController = require('../controllers/shopifyController');

router.get('/', shopifyController.index);
router.get('/callback', shopifyController.callback);

module.exports = router;