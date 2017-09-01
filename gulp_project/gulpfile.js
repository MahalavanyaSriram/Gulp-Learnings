var gulp = require('gulp'),
    gutil = require('gulp-util'),
    eslint = require('gulp-eslint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('default', ['watch']);
gulp.task('copyHtml', function() {
    // copy any html files in source/ to public/
    gulp.src('source/**/*.html').pipe(gulp.dest('public'));
});
gulp.task('eslint', function() {
    return gulp.src('source/scss/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sourcemaps.init()) // Process the original sources
        .pipe(sass())
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(gulp.dest('public/assets/stylesheets'));
});
gulp.task('build-js', function() {
    return gulp.src('source/javascript/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/assets/javascript'));
});
gulp.task('watch', function() {
    gulp.watch('source/javascript/**/*.js', ['eslint']);
    gulp.watch('source/scss/**/*.scss', ['build-css']);
    gulp.watch('source/**/*.html', ['copyHtml']);
    gulp.watch('source/javascript/**/*.js', ['build-js']);
});