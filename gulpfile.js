const gulp = require('gulp');
const rimraf = require('rimraf');

function clean(cb) {
  rimraf('dist', (error) => {
    cb(error);
  });
}

function copy() {
  const files = ['src/**/*', 'manifest.json'];
  const destination = 'dist/cipher';
  return gulp.src(files).pipe(gulp.dest(destination));
}

module.exports = {
  build: gulp.series(clean, copy),
};
