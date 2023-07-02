const Author = require("./Author");

const lucas = new Author("Lucas");

const post = lucas.writePost("Título do Post", "Lorem Ipsum...");

post.addNewComment("Isaac Pontes", "Muito bem! Gostei demais");
post.addNewComment(
  "Vinícios de Moraes",
  "Literatura Brasileira é algo muito incrível"
);

console.log(lucas);
console.log(post);
