const controller = require('../controllers/thing.controller')
const express = require('express');

const router = express.Router({ mergeParams: true});

router.get('/thing', controller.getThings);
router.post('/thing', controller.createThing);

module.exports = router;