class Post {
    constructor(id, title, text, createdAt, user, comments) {
      this.id = id;
      this.title = title;
      this.text = text;
      this.createdAt = createdAt;
      this.user = user;
      this.comments = comments;
    }
}

module.exports = Post;
