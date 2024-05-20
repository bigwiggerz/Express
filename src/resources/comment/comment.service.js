import * as commentRepository from '../comment/comment.memory.repository';

export const getAllComments = () => commentRepository.getComments();

export const getCommentById = (id) => commentRepository.findCommentById(id);

export const createComment = (commentData) => commentRepository.addComment(commentData);

export const updateComment = (id, updateData) => {
  const comment = commentRepository.findCommentById(id);
  if (!comment) return null;
  Object.assign(comment, updateData);
  return comment;
};

export const deleteComment = (id) => {
  commentRepository.comments = commentRepository.comments.filter(comment => comment.id !== id);
};