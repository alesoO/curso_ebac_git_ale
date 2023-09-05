const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate')
const imagemin = require('gulp-imagemin')

function compJs() {
    return gulp.src('./source/js/*.js')
        .pipe(sourceMaps.init())
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/js'));
}

function compImg() {
    return gulp.src('./source/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
}

function compSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.sass = compSass;
exports.Js = compJs;
exports.img = compImg;

exports.watch = function () {
    gulp.watch('./source/styles/*.scss', gulp.series(compSass));
    gulp.watch('./source/js/*.js', gulp.series(compJs));
    gulp.watch('./source/img/*', gulp.series(compImg));
}