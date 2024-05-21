import { Router } from 'express'
import * as commentController from "./comment.controller.js";

const router = Router();

router.get('/', commentController.getAllComments);
router.get('/:commentId', commentController.getCommentById);
router.post('/', commentController.createComment);
router.put('/:commentId', commentController.updateComment);
router.delete('/:commentId', commentController.deleteComment);

export default router;