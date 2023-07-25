import controller from '../controllers/thing.controller';

const express = require('express');

const router = express.Router({ mergeParams: true});

router.get('/thing', controller.getThings);
router.post('/thing', controller.createThing);

export default router;