const { Router } = require('express');
const router = Router();
const { getNowTime } = require('../../../controllers/timeGetter');
const { getUserByID, getAllUsers } = require('../../../controllers/userGetter');

router.get('/nowTime', getNowTime);

router.get('/getUser', getUserByID);

router.get('/getUsers', getAllUsers);


module.exports = router;