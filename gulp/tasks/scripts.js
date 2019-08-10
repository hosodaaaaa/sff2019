const gulp = require("gulp");
const plumber = require("gulp-plumber");
const config = require("../config");

gulp.task("scripts", () => {
  gulp
    .src(`${config.src.js}/*.js`)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest.js));
});
