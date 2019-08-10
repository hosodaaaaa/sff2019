const gulp = require("gulp");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const progeny = require("gulp-progeny");
const autoprefixer = require("gulp-autoprefixer");
const config = require("../config");

// sass task
gulp.task("sass", done => {
  gulp
    .src(`${config.src.sass}/**/*.sass`)
    .pipe(plumber())
    .pipe(progeny())
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(gulp.dest(config.dest.css));
  done();
});
