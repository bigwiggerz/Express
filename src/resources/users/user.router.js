const express = require('express');
const userController = require('./user.controller');
const router = express.Router();

router.get('/', userController.getAllusers);
router.get('/userId', userController.getuserById);
router.get('/:userId/posts', userController.getuserPosts);
router.post('/', userController.createuser);
router.put('/:userId', userController.updateuser);
router.delete('/:userId', userController.deleteuser);

module.exports = router;