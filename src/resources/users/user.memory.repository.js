const users = [];

export const getUsers = () => users;

export const addUser = (user) => {
  users.push(user);
  return user;
};

export const findUserById = (id) => users.find(user => user.id === id);

export const updateUser = (id, userData) => {
  const user = findUserById(id);
  if (user) {
    Object.assign(user, userData);
    return user;
  }
  return null;
};