import { v4 as uuidv4 } from 'uuid';

class User {
  constructor(id = uuidv4(), email, name, password, posts, comments) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    this.posts = posts;
    this.comments = comments;
  }
}

module.exports = User;
