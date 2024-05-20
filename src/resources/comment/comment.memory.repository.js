let comments = [];

export const getComments = () => comments;

export const addComment = (comment) => {
    comments.push(comment);
    return comment;
  };

export const findCommentById = (id) => comments.find(comment => comment.id === id);

export const updateComment = (id, commentData) => {
    const comment = findCommentById(id);
    if (comment) {
      Object.assign(comment, commentData);
      return comment;
    }
    return null;
};

export const deleteComment = (id) => {
    comments = comments.filter(comment => comment.id !== id);
  };