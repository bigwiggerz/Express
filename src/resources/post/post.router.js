const express = require('express');
const postController = require('./post.controller');
const router = express.Router();

router.get('/', postController.getAllpost);
router.get('/:postId', postController.getpostById);
router.get('/:postId/user', postController.getpostuser);
router.get('/:postId/comments', postController.getcommentpost);
router.post('/', postController.createpost);
router.put('/:postId', postController.updatepost);
router.delete('/:postId', postController.deletepost);