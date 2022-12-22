const { Router } = require('express');
const router = Router();
const testRoutes = require('./test');

router.use('/test', testRoutes);

module.exports = router;