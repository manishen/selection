const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
 
const regex = /^(import|export).*;{1}$/gm;

gulp.task('js-build', function(){
  return gulp.src(['./node_modules/pasoon-calendar-view/src/*.js', './src/*.js'], {base:'./'})
    .pipe(concat('date-picker.js'))
    .pipe(replace(regex, ''))
    .pipe(gulp.dest('dist'))
});

gulp.task('js-minify', function(){
  return gulp.src(['./node_modules/pasoon-calendar-view/src/*.js', './src/*.js'], {base:'./'})
    .pipe(concat('date-picker.js'))
    .pipe(replace(regex, ''))
    .pipe(minify())
    .pipe(gulp.dest('dist'))
    .pipe(rename('calendar-view.min.js'))
});

gulp.task('sass-build', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass-minify', function () {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['sass-minify', 'js-minify']);

gulp.task('minify', ['sass-minify', 'js-minify']);

gulp.task('build', ['sass-build', 'js-build']);
 
gulp.task('watch', function () {
  gulp.watch('./src/**/*.*', ['sass-build','js-build']);
});