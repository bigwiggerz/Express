class Comment {
    constructor(id = uuidv4(), text, createdAt, user, post) {
      this.id = id;
      this.text = text;
      this.createdAt = createdAt;
      this.user = user;
      this.post = post;
    }
}

module.exports = Comment;
