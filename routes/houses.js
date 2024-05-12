const express = require('express');
const router = express.Router();
const houseCtrl = require('../controllers/houses');

router.get('/', houseCtrl.index);

router.get('/:id', houseCtrl.show);

module.exports = router;