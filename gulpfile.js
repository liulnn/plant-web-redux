var gulp = require('gulp'),
// jshint = require('gulp-jshint'),
// webpack = require('gulp-webpack'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify');
// rename = require('gulp-rename');

var webpack = require("webpack"),
    webpackConf = require("./webpack.config.js");

// gulp.task('lint', function () {
//     gulp.src('./js/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'));
// });

gulp.task('webpack', function (callback) {
    webpack(webpackConf, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task('copyIndex', ['uglify'], function () {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist'))
        .pipe(gulp.dest('./public'))
})

gulp.task('uglify', ['webpack'], function () {
    return gulp.src('./dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'))
})

gulp.task('default', ['copyIndex'], function () {
     gulp.src(['./bundle.js'])
     .pipe(gulp.dest('./dist'))
     .pipe(uglify())
     .pipe(gulp.dest('./public'));
});