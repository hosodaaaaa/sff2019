// package
const gulp = require("gulp");
const del = require("del");
const config = require("./gulp/config");
require("require-dir")("./gulp/tasks");

// watch task
gulp.task("watch", done => {
  gulp.watch(`${config.src.pug}/**/*.pug`, gulp.parallel("pug"));
  gulp.watch(`${config.src.sass}/**/*.sass`, gulp.parallel("sass"));
  gulp.watch(`${config.src.js}/*.js`, gulp.parallel("scripts"));
  gulp.watch(`${config.src.images}/**.*`, gulp.parallel("images"));
  done();
});

// clean
gulp.task("clean", () => del([`${config.dest.html}/**/*.html`, config.dest.css, config.dest.js]));

// build
gulp.task("build", gulp.series("clean", gulp.parallel("pug", "sass", "scripts", "images")));

// develop
gulp.task("develop",gulp.series("build", "server", "watch", "reload"));

// default
gulp.task('default', gulp.series('develop'));