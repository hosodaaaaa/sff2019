const gulp = require("gulp");
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const progeny = require("gulp-progeny");
const config = require("../config");

// pug task
gulp.task("pug", () => {
  gulp
    .src(`${config.src.pug}/**/[^_]*.pug`)
    .pipe(plumber())
    .pipe(progeny())
    .pipe(pug())
    .pipe(gulp.dest(config.dest.html));
});
