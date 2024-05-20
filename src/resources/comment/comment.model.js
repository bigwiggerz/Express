class Comment {
    constructor(id, text, createdAt, user, post) {
      this.id = id;
      this.text = text;
      this.createdAt = createdAt;
      this.user = user;
      this.post = post;
    }
}

module.exports = Comment;
