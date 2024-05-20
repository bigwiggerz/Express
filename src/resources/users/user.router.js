const express = require('express');
const UserController = require('../users/user.controller');
const router = express.Router();

router.get('/', UserController.getAllusers);
router.get('/userId', UserController.getuserById);
router.get('/:userId/posts', UserController.getuserPosts);
router.post('/', UserController.createuser);
router.put('/:userId', UserController.updateuser);
router.delete('/:userId', UserController.deleteuser);

module.exports = router;