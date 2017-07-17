var gulp = require('gulp');
var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
    gulp.src('griew.scss')
    // .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});

gulp.task('minify', function () {
    gulp.src('griew.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('full', ['sass', 'minify']);
