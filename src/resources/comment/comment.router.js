const express = require('express');
const commentController = require('./comment.controller');
const router = express.Router();

router.get('/', commentController.getAllcomments);
router.get('/:commentId', commentController.getcommentById);
router.get('/:commentId/user', commentController.getcommentuser);
router.get('/:comment/postId', commentController.getpostcomment);
router.post('/', commentController.createcomment);
router.put('/:commentId', commentController.updatecomment);
router.delete('/:commentId', commentController.deletecomment);

module.exports = router;