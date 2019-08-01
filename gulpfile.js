// パッケージ
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const progeny = require("gulp-progeny");

const paths = {
  src: {
    sass: "./src/sass/**/*.sass",
    pug: "./src/**/*.pug"
  },
  dist: {
    css: "./dist/css/",
    html: "./dist/"
  }
};

// sass task
gulp.task("default", function() {
  return gulp
    .src(paths.src.sass)
    .pipe(plumber())
    .pipe(progeny())
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(gulp.dest("paths.src.css"));
});

// pug task
gulp.task("pug", function() {
  return gulp
    .src("paths.src.pug")
    .pipe(plumber())
    .pipe(progeny())
    .pipe(gulp.dest("paths.src.html"));
});
