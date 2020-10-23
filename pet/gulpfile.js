const gulp = require('gulp');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
function fnCopyLib(){
    return gulp.src('./src/lib/*.js')
    .pipe(gulp.dest('./dist/lib'))
}
function fnImg(){
    return gulp.src('./src/image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image'))
}
function fnHTML(){
    return gulp.src('./src/index.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist/pages'))
}
function fnJS(){
    return gulp.src('./src/js/*js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/js'))
}
function fnCss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'))
}
function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
}
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/pages/*.html',fnHTML);
    gulp.watch('./src/image/*',fnImg);
    gulp.watch('./src/lib/*.js',fnCopyLib);
}
exports.css = fnCss;
exports.copy = fnCopyIndex;
exports.default = fnWatch;
exports.js = fnJS;
exports.html = fnHTML;
exports.img = fnImg;
exports.lib = fnCopyLib;
