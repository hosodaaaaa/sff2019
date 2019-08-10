const path = require("path");

// edit dir path
const src = {
  root: "./src",
  sass: "./src/sass",
  pug: "./src",
  js: "./src/js",
  images: "./src/images"
};

const dest = {
  root: "./dist",
  css: "./dist/css",
  html: "./dist",
  js: "./dist/js",
  images: "./dist/images"
};

// pug settings
const pugConfig = {
  basedir: src.html,
  pretty: true
};

module.exports = {
  src,
  dest,
  pug: pugConfig
};
