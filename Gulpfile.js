var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var http = require('http');
var ecstatic = require('ecstatic');
var p = require('partialify');

// define tasks here
gulp.task('default', function(){
  http.createServer(
    ecstatic({ root: __dirname + '/client' })
  ).listen(8080);

  console.log('Listening on :8080');
  var bundler = browserify({
    entries: ['./app/app.js'],
    debug: true,
    cache: {},
    packageCache: {},
    transform: p,
    fullPaths: true
  });
  var watcher = watchify(bundler);
  watcher
    .on('update', function() {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle()
      .on('error', function(err) {
        console.log('Error with compiling components', err.message);
      })
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('./client/'));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    // Create the initial bundle when starting the task
    .bundle()
    .on('error', function(err) {
      console.log('Error with compiling components', err.message);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./client/'));
});
