'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

module.exports = function () {
  const processors = [
    autoprefixer({browsers: ['last 2 versions']})
  ];

  return gulp.src('./src/styles/main.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('./static/css'));
};
