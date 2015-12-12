'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');

module.exports = function () {
  watch('./src/**/*.js', function () {
    gulp.start('lint');
  });

  watch('./src/styles/**/*.scss', function () {
    gulp.start('sass');
  });
};
