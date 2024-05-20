import * as postRepository from '../post/post.memory.repository';

export const getAllPosts = () => postRepository.getPosts();

export const getPostById = (id) => postRepository.findPostById(id);

export const createPost = (postData) => postRepository.addPost(postData);

export const updatePost = (id, updateData) => {
  const post = postRepository.findPostById(id);
  if (!post) return null;
  Object.assign(post, updateData);
  return post;
};

export const deletePost = (id) => {
  postRepository.posts = postRepository.posts.filter(post => post.id !== id);
  postRepository.comments = postRepository.comments.filter(comment => comment.postId !== id);
};