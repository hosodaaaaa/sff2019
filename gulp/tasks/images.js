const gulp = require("gulp");
const plumber = require("gulp-plumber");
const imgmin = require("gulp-imagemin");
const config = require("../config");

gulp.task("images", done => {
  gulp
    .src(`${config.src.images}/**.*`)
    .pipe(plumber())
    .pipe(imgmin())
    .pipe(gulp.dest(config.dest.images));
  done();
});
