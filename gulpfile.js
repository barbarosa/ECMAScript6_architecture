/**
 * Builds app using gulp
 */

'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babelify = require('babelify');
var webserver = require('gulp-webserver');

gulp.task('copy_index', function () {
  gulp.src('src/*.html').pipe(gulp.dest('public/'));
});

gulp.task('browserify', function () {
  gulp.src('src/js/app.js', {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('public/assets/js/'));
});

gulp.task('default', ['copy_index', 'browserify']);

gulp.task('compiled', ['default']);

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('webserver', function () {
  gulp.src('public')
    .pipe(webserver({
      open: true,
      fallback: 'index.html'
    }));
});
