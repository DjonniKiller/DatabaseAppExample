const { Router } = require('express');
const router = Router();
const { getNowTime } = require('../../../controllers/timeGetter.js');

router.get('/', getNowTime);

module.exports = router;