// cnpm install gulp gulp-concat gulp-uglify gulp-babel babel-core babel-preset-es2015
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var bundles = [
    "angular.min.js",
    "angular-ui-router.js",
    "angular-animate.min.js",
    "src/*.js"
];
gulp.task('default', ['watch'], function(){
  console.log('start...');
});
gulp.task('babel', function(){
  return gulp.src(bundles)
    .pipe(babel({
        presets: ['es2015']
    }))
    // .pipe(gulp.dest(__dirname))
    .pipe(uglify())
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(__dirname));
});

gulp.task('sso', function(){
  return gulp.src(['src/sso.js'])
    .pipe(uglify())
    .pipe(concat('sso.min.js'))
    .pipe(gulp.dest(__dirname));
});
gulp.task('watch', function() {
  gulp.watch('src/*.js', ['babel']);
});
