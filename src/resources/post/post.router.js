import { Router } from 'express';
import * as PostController from "./post.controller.js";

const router = Router();

router.get('/', PostController.getAllPosts);
router.get('/:postId', PostController.getPostById);
router.post('/', PostController.createPost);
router.put('/:postId', PostController.updatePost);
router.delete('/:postId', PostController.deletePost);

export default router;
