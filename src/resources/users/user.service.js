import * as userRepository from '../users/user.memory.repository';

export const getAllUsers = () => userRepository.getUsers();

export const getUserById = (id) => userRepository.findUserById(id);

export const createUser = (userData) => userRepository.addUser(userData);

export const updateUser = (id, updateData) => {
  const user = userRepository.findUserById(id);
  if (!user) return null;
  Object.assign(user, updateData);
  return user;
};

export const deleteUser = (id) => {
  userRepository.users = userRepository.users.filter(user => user.id !== id);
  userRepository.posts = userRepository.posts.filter(post => post.userId !== id);
  userRepository.comments = userRepository.comments.filter(comment => comment.userId !== id);
};