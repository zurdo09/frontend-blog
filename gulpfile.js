var gulp = require('gulp');
var w3cjs = require('gulp-w3cjs');
var csslint = require('gulp-csslint');

gulp.task('htmllint', function () {
    gulp.src('index.html')
        .pipe(w3cjs());
});


gulp.task('csslint', function() {
  gulp.src('css/styles.css')
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task('default', function() {
  gulp.start('htmllint', 'csslint');
});
