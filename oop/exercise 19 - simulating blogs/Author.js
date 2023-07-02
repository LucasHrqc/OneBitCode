const Posts = require("./Posts");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  writePost(title, body) {
    const post = new Posts(title, body, this);
    this.posts.push(post);
    return post;
  }
}

module.exports = Author;
