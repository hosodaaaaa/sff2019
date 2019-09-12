const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const config = require("../config");
const bsyncConfig = require("../bs-config.js");

gulp.task("server", () => {
  browserSync.init(bsyncConfig);
});

gulp.task("reload", () => {
  gulp.watch(`${config.src.dist}/*`, () => {
    browserSync.reload();
  });
});
