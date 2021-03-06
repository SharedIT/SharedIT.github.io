var gulp        = require('gulp');
var browserSync = require('browser-sync');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
 gulp.task('jekyll-build', function (done){
     var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";
     return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
         .on('close', done);
 });

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

//watch any sass, any scss and index.html

gulp.task('watch', function () {
  gulp.watch([ './*.html', './*.md', 'assets/**/*.sass', 'assets/**/*.scss', './!(_site)/*.md', './!(_site)/*.html'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
