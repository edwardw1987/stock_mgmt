// cnpm install gulp gulp-concat gulp-uglify gulp-babel babel-core babel-preset-env
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var webpack = require('webpack-stream');
gulp.task('default', ['watch'], function(){
  console.log('start...');
});
gulp.task('babel', ["lib",], function(){
  return gulp.src("./src/*.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(babel({
        presets: ['env'],
        plugins: ["angularjs-annotate"]
    }))
    // .pipe(gulp.dest(__dirname))
    .pipe(uglify())
    // .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(__dirname));
});
gulp.task("lib", () => {
  return gulp.src([
    "./lib/angular.min.js",
    "./lib/*.js"
    ])
    // .pipe(gulp.dest(__dirname))
    // .pipe(uglify())
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(__dirname));
})
gulp.task('sso', function(){
  return gulp.src(['src/sso.js'])
    .pipe(uglify())
    .pipe(concat('sso.min.js'))
    .pipe(gulp.dest(__dirname));
});
gulp.task('watch', function() {
  gulp.watch(['src/*.js', 'src/partials/*.html'], ['babel']);
});
