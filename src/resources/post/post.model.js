import { v4 as uuidv4 } from 'uuid';

class Post {
    constructor(id = uuidv4(), title, text, createdAt, user, comments) {
      this.id = id;
      this.title = title;
      this.text = text;
      this.createdAt = createdAt;
      this.user = user;
      this.comments = comments;
    }
}

export default Post;
