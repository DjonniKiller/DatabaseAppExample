const { Router } = require('express');
const router = Router();
const { getNowTime } = require('../../../controllers/timeGetter');
const { getUserByID, getAllUsers } = require('../../../controllers/userGetter');
const { addUser } = require('../../../controllers/addUser');

router.get('/nowTime', getNowTime);

router.get('/getUser', getUserByID);

router.get('/getUsers', getAllUsers);

router.post('/addUser', addUser);


module.exports = router;