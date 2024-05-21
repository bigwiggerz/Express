import * as PostService from "./post.service.js";


export const getAllPosts = (req, res) => {
  const posts = PostService.getAllPosts(); // Исправлен вызов функции
  res.json(posts);
};

export const getPostById = (req, res) => {
  const post = PostService.getPostById(req.params.postId); // Исправлен вызов функции и параметр
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
};

export const createPost = (req, res) => {
  const newPost = PostService.createPost(req.body); // Исправлен вызов функции
  res.status(201).json(newPost);
};

export const updatePost = (req, res) => {
  const updatedPost = PostService.updatePost(req.params.postId, req.body); // Исправлен вызов функции и параметр
  if (updatedPost) {
    res.json(updatedPost);
  } else {
    res.status(404).send('Post not found');
  }
};

export const deletePost = (req, res) => {
  PostService.deletePost(req.params.postId); // Исправлен вызов функции
  res.status(204).send();
};
