let posts = [];
let comments = [];

export const getPosts = () => posts;

export const addPost = (post) => {
    posts.push(post);
    return post;
  };

export const findPostById = (id) => posts.find(post => post.id === id);

export const updatePost = (id, postData) => {
    const post = findPostById(id);
    if (post) {
      Object.assign(post, postData);
      return post;
    }
    return null;
};

export const deletePost = (id) => {
    posts = posts.filter(post => post.id !== id);
    comments = comments.filter(comment => comment.postId !== id);
  };