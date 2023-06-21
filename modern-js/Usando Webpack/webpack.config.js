const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    hello: "./src/hello.js",
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.min.js",
  },
};

// It takes the entrey key name to generate the file inside the dist folder.
// The mode defines the way the exit will be written. Production sets the production script while development doesn't do it equally
