const Comments = require("./Comment");

class Posts {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
    this.createdAt = new Date().toLocaleDateString();
  }

  addNewComment(username, content) {
    this.comments.push(new Comments(username, content));
    return `Comentários dos posts: ${this.comments}`;
  }
}

module.exports = Posts;
