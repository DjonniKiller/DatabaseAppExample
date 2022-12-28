const { Router } = require('express');
const router = Router();
const timeRoutes = require('./time/time.js');
const usersRoutes = require('./users/users.js');

router.use('/users', usersRoutes);
router.use('/time', timeRoutes);

module.exports = router;