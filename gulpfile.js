'use strict';
var gulp = require('gulp');
var browserSync = require("browser-sync");


gulp.task('default', ['serve'] );

gulp.task('serve',  function () {

  browserSync.instance = browserSync.init(['*.html','*.js','*.css','*.json'], {
    startPath: "index.html",
    server: {
      baseDir: ".",
      directory:true
    },
    browser: "google chrome",
    notify: false
  });

});



