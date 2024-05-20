class User {
  constructor(id, email, name, password, salt, posts, comments) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
    this.salt = salt;
    this.posts = posts;
    this.comments = comments;
  }
}

module.exports = User;
