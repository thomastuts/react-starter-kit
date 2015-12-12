'use strict';

const gulp = require('gulp');

const bundle = require('./tasks/bundle');
const lint = require('./tasks/lint');
const serve = require('./tasks/serve');
const watch = require('./tasks/watch');
const sass = require('./tasks/sass');

gulp.task('bundle', ['lint'], bundle);
gulp.task('lint', lint);
gulp.task('watch', watch);
gulp.task('sass', sass);
gulp.task('serve', ['watch', 'sass', 'bundle'], serve);

gulp.task('default', ['serve']);
