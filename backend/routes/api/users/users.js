const { Router } = require('express');
const router = Router();
const { getUserByID, getAllUsers } = require('../../../controllers/userGetter.js');
const { addUser } = require('../../../controllers/addUser.js');

router.get('/byId/:id', getUserByID);

router.get('/', getAllUsers);

router.post('/', addUser);

module.exports = router;