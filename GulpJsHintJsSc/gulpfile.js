var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var eslint = require('gulp-eslint');

gulp.task('jscs', function () {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(jscs())
        .pipe(jscs.reporter());
});

gulp.task('lint', function () {
    return gulp.src(['**/*.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('jshint', function () {
    console.log('analyse my source');
    return gulp.src(['**/*.js', '!node_modules/**'])      
        .pipe(jshint())
        //.pipe(eslint())
        .pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});



