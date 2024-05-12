const express = require('express');
const router = express.Router();
const apartmentsCtrl = require('../controllers/apartments');

//All routes prefixed with /apartments in the endpoint
router.get('/', apartmentsCtrl.index);

router.get('/:id', apartmentsCtrl.show);

module.exports = router;